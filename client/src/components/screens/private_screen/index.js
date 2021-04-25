import { useState, useEffect } from "react";
import axios from "axios";

import NotAuth from "./notAuth.jsx";
import Auth from "./auth.jsx";
import ThreeApp from "./threeApp.js";

//userName is the private data here
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setuserName(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  return error ? (
    <NotAuth error={error} />
  ) : (
    <>
      <Auth userName={userName} />
      <ThreeApp />
    </>
  );
};

export default PrivateScreen;
