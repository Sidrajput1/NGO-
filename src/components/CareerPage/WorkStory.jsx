import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import story1 from "../../assets/pics/story1.jpeg";
import story2 from "../../assets/pics/story2.jpeg";
import story3 from "../../assets/pics/story3.jpeg";
import story5 from "../../assets/pics/story5.jpeg";
import story6 from "../../assets/pics/story6.jpeg";
import story8 from "../../assets/pics/story8.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WorkStory() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(
          "https://prabisvg.com/phpbox/fetchstory.php"
        );
        console.log(res.data);

        setPhotos(res.data.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        No photos found.
      </div>
    );
  }
  //   const stories = [
  //     {
  //       title: "Radha devi from vaishali district",
  //       image: story1,
  //       summary:
  //         "This is Radha Devi from Vaishali district whose husband died suddenly. After the death of her husband, the condition of the family became very bad. And she had to face a lot of difficulties in raising her children. But then with the help of Vasta, she was able to open an egg shop, with the help of which she could live her life better and could educate her children at a better level.",
  //     },
  //     {
  //       title: "Sima Devi from Vaishali district",
  //       image: story2,
  //       summary:
  //         "This is Semi Devi from Vaishali district whose husband died suddenly. After the death of her husband, the condition of the family became very bad. And they had to face a lot of difficulties in raising their children. But then with the help of Vasta, they were helped to open a bamboo shop and some financial help was given to them, with the help of which they could live their life in a better way and could educate their children at a better level.",
  //     },

  //     {
  //       title: "Pooja Kumari from Vaishali district",
  //       image: story6,
  //       summary:
  //         "This is Pooja Kumari from Vaishali district. She is handicapped. Due to her disability, she was facing a lot of difficulties in earning her livelihood but then Vasta helped her to open an egg shop so that she could live a better and free life.",
  //     },

  //     // Add more stories here
  //   ];

  return (
    <div className="w-full">
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
        <img
          className="absolute h-full w-full inset-0 object-fill"
          src="https://i.pinimg.com/564x/d9/8c/a3/d98ca3e511adb66ec6253e6214bb0715.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-300 to-gray-900 opacity-50"></div>
        <div className="relative p-10 lg:p-4 text-white  ">
          <div className="text-center md:p-[7rem] pt-[4re">
            <h2 className="text-4xl  lg:text-6xl text-white z-50 font-extrabold tracking-wide mb-4">
              Our Work Stories
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold uppercase underline underline-offset-8 decoration-yellow-800 text-orange-500 text-center mb-8">
            Stories
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Read the inspiring stories of our work we have helped through our
            initiatives.
          </p>
          {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                image={story.image}
                summary={story.summary}
              />
            ))}
          </div> */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                image_url={`https://prabisvg.com/phpbox/${story.image_url.replace('./', '')}`}
                description={story.description
                }
              />
            ))}
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://prabisvg.com/phpbox/${photo.image_url.replace(
                    "./",
                    ""
                  )}`}
                  alt={photo.title}
                  className="w-full h-48 object-cover cursor-pointer"
                 
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {photo.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{photo.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Uploaded on{" "}
                    {new Date(photo.uploaded_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WorkStory;
