import React, { useState } from "react";
import ToogleCheckbox from "../shared/ToogleCheckbox";
import useLayer from "../shared/useLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
const SchoolLayerCheckbox = () => {
  const [checked, setChecked] = useState(true);

  const schoolLayer = new VectorLayer({
    source: new VectorSource({
      url: "/lecture05/schools.json",
      format: new GeoJSON(),
    }),
  });
  useLayer(schoolLayer, checked);

  return (
    <>
      <ToogleCheckbox
        lableOff={"Hide "}
        lableOn={"Show "}
        title={"Schools"}
        onChange={(e) => setChecked(e.target.checked)}
        isChecked={checked}
      />
    </>
  );
};
export default SchoolLayerCheckbox;
