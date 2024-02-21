import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { MapContext, map } from "../context/MapContext";
import Layer from "ol/layer/Layer";
import KommunerAside from "../kommuner/KommunerAside";
import FylkeAside from "../fylke/FylkeAside";
import SchoolAside from "../schools/SchoolAside";
import NavBar from "../shared/Navbar";
const MapApplication = () => {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);

  useEffect(() => map.setLayers(layers), [layers]);
  useEffect(() => map.setTarget(mapRef.current), []);
  return (
    <MapContext.Provider value={{ map, setLayers, layers }}>
      <NavBar />
      <main>
        <div ref={mapRef}></div>
        {/** <KommunerAside />
        <FylkeAside />
        <SchoolAside /> */}
      </main>
    </MapContext.Provider>
  );
};
export default MapApplication;
