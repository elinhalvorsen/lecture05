import React from "react";
import FocusUser from "../application/FocusUser";
import KommunerCheckbox from "../kommuner/KommunerCheckbox";
import FylkeCheckbox from "../fylke/FylkeCheckbox";
import SchoolLayerCheckbox from "../schools/SchoolLayerCheckbox";
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
