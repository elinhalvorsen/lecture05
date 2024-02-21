import React, { useContext, useEffect, useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import ToogleCheckbox from "../shared/ToogleCheckbox";
import useLayer from "../shared/useLayer";

const fylkeLayer = new VectorLayer({
  className: "fylker",
  source: new VectorSource({
    url: "/lecture05/fylker.json",
    format: new GeoJSON(),
  }),
});
const FylkeCheckbox = () => {
  const [checked, setChecked] = useState(false);
  useLayer(fylkeLayer, checked);

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
