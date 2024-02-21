import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/MapContext";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import ToogleCheckbox from "../shared/ToogleCheckbox";

const layer = new VectorLayer({
  className: "kommuner",
  source: new VectorSource({
    url: "/lecture05/kommuner.json",
    format: new GeoJSON(),
  }),
});
const KommunerCheckbox = () => {
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
        title={" kommuner"}
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
};
export default KommunerCheckbox;
