import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";
import { Link } from "react-router-dom";
import './notice.css';

function DelNotice() {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "https://prabisvg.com/phpbox/fetchnotice.php"
      );
      console.log("FullResponse:", res.data); // Log the entire response

      if (res.data.success) {
        //console.log('Fetched Notices:', res.data.data);
        setNotices(res.data.data || []);
        //alert("Notice fetched successfully");
      } else {
        console.error("Error in response:", res.data.message);
        //toast.error('Failed to fetch notices. Please try again later.');
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const checkLoginStatus = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");
  };

  useEffect(() => {
    fetchNotices();
    checkLoginStatus();
  }, []);

  const deleteNotice = async (id) => {
    try {
      await axios.delete(
        `https://prabisvg.com/phpbox/delnotice.php?id=${id}`
      );
      setNotices(notices.filter((notice) => notice.id !== id));
      toast.success("Notice deleted successfully");
    } catch (error) {
      console.error("Error deleting notice:", error);
      //toast.error('Failed to delete notice. Please try again later.');
    }
  };
  return (
    <AdminLayout>
      <div>
        <div className="notice-board">
          <h2>Notice Board</h2>

          {notices.length > 0 ? (
            <ul>
              {notices.map((notice) => (
                <li key={notice.id}>
                  <h3>{notice.title}</h3>
                  <p>{notice.details}</p>
                  <p>
                    Created at: {new Date(notice.created_at).toLocaleString()}
                  </p>
                  <p>
                    Update at:{new Date(notice.updated_at).toLocaleString()}
                  </p>
                  {isLoggedIn && (
                    <button
                      className="px-3 py-2 bg-red-400"
                      onClick={() => deleteNotice(notice.id)}
                    >
                      Delete
                    </button>
                  )}
                  {isLoggedIn && (
                    <Link
                      className="px-3 py-2 ml-2 bg-primary "
                      to={`/notice/${notice.id}/update`}
                    >
                      Update
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No notices found</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default DelNotice;
