import React, { useState } from "react";
import ToogleCheckbox from "../../shared/ToogleCheckbox";
import useLayer from "../../map/useLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Style, Stroke, Fill, Circle } from "ol/style.js";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";

const SchoolLayerCheckbox = () => {
  const [checked, setChecked] = useState(true);

  type SchoolFeature = { getProperties(): SchoolProperties } & Feature<Point>;
  interface SchoolProperties {
    antall_elever: number;
    eierforhold: "Offentlig" | "Privat";
  }

  const schoolStyle = (f: FeatureLike) => {
    const feacture = f as SchoolFeature;
    const school = feacture.getProperties();
    return new Style({
      image: new Circle({
        stroke: new Stroke({ color: "white", width: 2 }),
        fill: new Fill({
          color: school.eierforhold === "Offentlig" ? "blue" : "purple",
        }),
        radius: 3 + school.antall_elever / 150,
      }),
    });
  };

  const schoolLayer = new VectorLayer({
    source: new VectorSource({
      url: "/lecture05/schools.json",
      format: new GeoJSON(),
    }),
    style: schoolStyle,
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
