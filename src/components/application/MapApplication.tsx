import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { MapContext, map } from "../map/MapContext";
import Layer from "ol/layer/Layer";
import KommunerAside from "../layers/kommuner/KommunerAside";
import FylkeAside from "../layers/fylke/FylkeAside";
import SchoolAside from "../layers/schools/SchoolAside";
import NavBar from "../shared/Navbar";

const MapApplication = () => {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [baseLayer, setBaseLayer] = useState<Layer>(
    () => new TileLayer({ source: new OSM() }),
  );
  const [vectorLayers, setVectorLayers] = useState<Layer[]>([]);
  const allLayers = useMemo(
    () => [baseLayer, ...vectorLayers],
    [baseLayer, vectorLayers],
  );
  useEffect(() => map.setLayers(allLayers), [allLayers]);
  useEffect(() => map.setTarget(mapRef.current), []);
  return (
    <MapContext.Provider
      value={{
        map,
        layers: vectorLayers,
        setLayers: setVectorLayers,
        setBaseLayer,
      }}
    >
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
