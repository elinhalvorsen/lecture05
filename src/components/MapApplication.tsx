import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

const MapApplication = () => {
  const map = new Map({
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({ center: [10, 59], zoom: 8 }),
  });

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  return (
    <>
      <header>
        <h1>Lecture 5 Map</h1>
      </header>
      <div ref={mapRef}></div>
    </>
  );
};
export default MapApplication;
