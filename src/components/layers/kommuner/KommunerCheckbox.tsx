import React, { useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import ToogleCheckbox from "../../shared/ToogleCheckbox";
import useLayer from "../../map/useLayer";

const KommunerCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const kommuneLayer = new VectorLayer({
    className: "kommuner",
    source: new VectorSource({
      url: "/lecture05/kommuner.json",
      format: new GeoJSON(),
    }),
  });

  useLayer(kommuneLayer, checked);

  return (
    <>
      <ToogleCheckbox
        lableOff={"Hide "}
        lableOn={"Show "}
        title={"kommuner"}
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
};
export default KommunerCheckbox;
