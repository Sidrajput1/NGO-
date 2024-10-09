import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://prabisvg.com/phpbox/login.php",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
      console.log("Response:", res.data);
      setMessage(res.data.message);
      if (res.data.status === "success") {
        //console.log(res.data);
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("userData", JSON.stringify(res.data.data));
        //console.log("Login Success");
        navigate("/dashboard");
        setUsername("");
        setPassword("");
      } else {
        console.log("Login failed:", res.data.message);
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
        console.log("Error:", error.message);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          {message && <p className="mb-4 text-red-500">{message}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="username"
              >
                User name
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="Enter your password"
              />
              {/* <a className="text-gray-600 hover:text-gray-800" href="#">
                Forgot your password?
              </a> */}
            </div>
            <div className="mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
