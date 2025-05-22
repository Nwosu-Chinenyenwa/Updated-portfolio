import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Load.scss";

function Load() {
  const navigate = useNavigate();
  const navigation = useNavigate();
  useEffect(() => {
    const navigate = setTimeout(() => {
      navigation("/home");
    }, 4000);
    return () => clearInterval(navigate);
  }, [navigate]);

  return (
    <div class="loader-container">
      <div class="loader"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default Load;
