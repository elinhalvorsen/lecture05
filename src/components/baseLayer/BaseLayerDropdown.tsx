import React, { useState } from "react";
const BaseLyerDropdown = () => {
  const baseLayerOptions = [
    {
      id: "osm",
      name: "Open Street Map",
    },
    {
      id: "stadia",
      name: "Stadia Map",
    },
  ];
  const [selectedLayer, setSelectedLayer] = useState(baseLayerOptions[0]);
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
          <option value={id}>{name}</option>
        ))}
      </select>
      {selectedLayer.name}
    </div>
  );
};
export default BaseLyerDropdown;
