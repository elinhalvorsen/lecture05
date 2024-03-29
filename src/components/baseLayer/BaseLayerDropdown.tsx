import TileLayer from "ol/layer/Tile";
import React, { useContext, useEffect, useState } from "react";
import { OSM, StadiaMaps } from "ol/source";
import { MapContext } from "../map/MapContext";
const BaseLyerDropdown = () => {
  const { setBaseLayer } = useContext(MapContext);
  const baseLayerOptions = [
    {
      id: "osm",
      name: "Open Street Map",
      layer: new TileLayer({ source: new OSM() }),
    },
    {
      id: "stadia",
      name: "Stadia Map",
      layer: new TileLayer({ source: new StadiaMaps({ layer: "outdoors" }) }),
    },
  ];
  const [selectedLayer, setSelectedLayer] = useState(baseLayerOptions[0]);
  useEffect(() => setBaseLayer(selectedLayer.layer), [selectedLayer]);
  return (
    <div>
      <select
        onChange={(e) =>
          setSelectedLayer(
            baseLayerOptions.find((l) => l.id === e.target.value)!,
          )
        }
        value={selectedLayer.id}
        className="form-select"
      >
        {baseLayerOptions.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BaseLyerDropdown;
