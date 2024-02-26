//Spørre foreleseren om denne
import { map } from "../map/MapContext";
import React from "react";

const FocusUser = () => {
  const handleFocusUser = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 12,
      });
    });
  };

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={handleFocusUser}>
          Focus on me
        </button>
      </div>
    </>
  );
};
export default FocusUser;
