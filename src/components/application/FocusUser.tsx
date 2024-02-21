//Spørre foreleseren om denne
import { map } from "../context/MapContext";
import React from "react";

const FocusUser = () => {
  const handleFocusUser = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 8,
      });
    });
  };

  return (
    <>
      <div>
        <a href={"#"} onClick={handleFocusUser}>
          Focus on me
        </a>
      </div>
    </>
  );
};
export default FocusUser;
