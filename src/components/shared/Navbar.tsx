import React from "react";
import FocusUser from "../application/FocusUser";
import KommunerCheckbox from "../layers/kommuner/KommunerCheckbox";
import FylkeCheckbox from "../layers/fylke/FylkeCheckbox";
import SchoolLayerCheckbox from "../layers/schools/SchoolLayerCheckbox";
const NavBar = () => {
  return (
    <>
      <header>
        <h1>Lecture 5 Map</h1>
      </header>
      <nav>
        <FocusUser />
        <KommunerCheckbox />
        <FylkeCheckbox />
        <SchoolLayerCheckbox />
      </nav>
    </>
  );
};
export default NavBar;
