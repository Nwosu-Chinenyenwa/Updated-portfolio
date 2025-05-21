import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Load.scss";

function Load() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div class="loader-container">
      <div class="loader"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default Load;
