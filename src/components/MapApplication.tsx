import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";

useGeographic();
const MapApplication = () => {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  const map = new Map({
    view: new View({ center: [10, 59], zoom: 8 }),
    layers: [new TileLayer({ source: new OSM() })],
  });

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  return (
    <>
      <header>
        <h1>Lecture 5 Map</h1>
      </header>
      <nav></nav>
      <main>
        <div ref={mapRef}></div>
      </main>
    </>
  );
};
export default MapApplication;
