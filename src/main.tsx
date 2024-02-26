import React from "react";
import ReactDOM from "react-dom/client";
import MapApplication from "./components/application/MapApplication";

import "./main.css";
import "ol/ol.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <MapApplication />,
);
