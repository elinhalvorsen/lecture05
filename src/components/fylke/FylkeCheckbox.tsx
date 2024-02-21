import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/MapContext";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import ToogleCheckbox from "../shared/ToogleCheckbox";

const layer = new VectorLayer({
  className: "fylker",
  source: new VectorSource({
    url: "/lecture05/fylker.json",
    format: new GeoJSON(),
  }),
});
const FylkeCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const { setLayers } = useContext(MapContext);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, layer]);
    }
    return () => setLayers((old) => old.filter((l) => l !== layer));
  }, [checked]);
  return (
    <>
      <ToogleCheckbox
        lableOff={"Hide"}
        lableOn={"Show"}
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        title={" Fylker"}
      />
    </>
  );
};
export default FylkeCheckbox;
