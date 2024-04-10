import React, { useContext, useEffect, useState } from "react";
import ToogleCheckbox from "../../shared/ToogleCheckbox";
import useLayer from "../../map/useLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Style, Stroke, Fill, Circle, Text } from "ol/style.js";
import { Feature, MapBrowserEvent } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { MapContext } from "../../map/MapContext";

type SchoolFeature = { getProperties(): SchoolProperties } & Feature<Point>;
interface SchoolProperties {
  navn: string;
  antall_elever: number;
  eierforhold: "Offentlig" | "Privat";
}

const schoolStyle = (f: FeatureLike) => {
  const feacture = f as SchoolFeature;
  const school = feacture.getProperties();
  return new Style({
    image: new Circle({
      stroke: new Stroke({ color: "white", width: 1 }),
      fill: new Fill({
        color: school.eierforhold === "Offentlig" ? "blue" : "purple",
      }),
      radius: 3 + school.antall_elever / 150,
    }),
  });
};

const activeSchoolStyle = (f: FeatureLike) => {
  const feacture = f as SchoolFeature;
  const school = feacture.getProperties();
  return new Style({
    image: new Circle({
      stroke: new Stroke({ color: "white", width: 3 }),
      fill: new Fill({
        color: school.eierforhold === "Offentlig" ? "blue" : "purple",
      }),
      radius: 3 + school.antall_elever / 150,
    }),
    text: new Text({
      text: school.navn,
      offsetY: -15,
      font: "bold 14px sans-serif",
      fill: new Fill({ color: "black" }),
      stroke: new Stroke({ color: "white", width: 2 }),
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

const SchoolLayerCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const { map } = useContext(MapContext);
  const [activeFeature, setActiveFeature] = useState<SchoolFeature>();

  const handlePointerMove = (e: MapBrowserEvent<MouseEvent>) => {
    console.log("pointermove", e.coordinate);

    const features: FeatureLike[] = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => features.push(f), {
      hitTolerance: 5,
      layerFilter: (l) => l === schoolLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as SchoolFeature);
    } else {
      setActiveFeature(undefined);
    }
  };

  useEffect(() => {
    activeFeature?.setStyle(activeSchoolStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);

  useLayer(schoolLayer, checked);
  useEffect(() => {
    if (checked) {
      map?.on("pointermove", handlePointerMove);
    }
    return () => {
      map?.un("pointermove", handlePointerMove);
    };
  }, [checked]);

  return (
    <>
      <ToogleCheckbox
        lableOff={"Hide "}
        lableOn={"Show "}
        title={"Schools"}
        onChange={(e) => setChecked(e.target.checked)}
        isChecked={checked}
      />
      {activeFeature && "(" + activeFeature.getProperties().navn + ")"}
    </>
  );
};
export default SchoolLayerCheckbox;
