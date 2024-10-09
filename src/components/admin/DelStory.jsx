import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function DelStory() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(
          "https://prabisvg.com/phpbox/fetchstory.php"
        );
        console.log("Gallery", res.data);
        setPhotos(res.data.photos);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    const checkLoginStatus = () => {
        const loggedIn = sessionStorage.getItem('loggedIn');
        setIsLoggedIn(loggedIn === 'true');
    };

    fetchGallery();
    checkLoginStatus();
  }, []);

  const deletePic = async (photoId) => {
    try {
        const response = await axios.delete(`https://prabisvg.com/phpbox/deletestory.php`, {
            data: { photo_id: photoId }
        });

        if (response.data.success) {
            // Update photos state by filtering out the deleted photo
            setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
            toast.success('Photo deleted successfully');
        } else {
            console.error('Error deleting photo:', response.data.message);
            //toast.error('Failed to delete photo.');
        }
    } catch (error) {
        console.error('Error deleting photo:', error);
        toast.error('Failed to delete photo. Please try again later.');
    }
};

if (loading) {
    return <div>Loading...</div>;
}
if (!photos || photos.length === 0) { // Check if photos is null or empty
    return <div>No photos found.</div>;
}

  return (
    <AdminLayout>
      <main className="max-w-5xl px-6 py-4 overflow-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                //src={`https://smschool.org.in/sms/uploads/${photo.image_url}`}
                src={`https://prabisvg.com/phpbox/${photo.image_url.replace(
                  "./",
                  ""
                )}`}
                alt={photo.title}
                className="w-full h-24 object-cover"
              />
              <div className="p-4">
                <h1>{photo.id}</h1>
                <h2 className="text-xl font-semibold">{photo.title}</h2>
                <p className="text-gray-600 text-sm">{photo.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Uploaded on {new Date(photo.uploaded_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                {isLoggedIn && (
                  <button
                    className="px-3 py-2 bg-red-400"
                    onClick={() => deletePic(photo.id)}
                  >
                    Delete
                  </button>
                )}
                {isLoggedIn && (
                  <Link
                    className="px-3 py-2 ml-2 bg-primary"
                    to={`/story/${photo.id}/update`}
                  >
                    Update
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminLayout>
  );
}

export default DelStory;
