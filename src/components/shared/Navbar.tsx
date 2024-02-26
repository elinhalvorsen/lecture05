import React from "react";
import FocusUser from "../application/FocusUser";
import KommunerCheckbox from "../layers/kommuner/KommunerCheckbox";
import FylkeCheckbox from "../layers/fylke/FylkeCheckbox";
import SchoolLayerCheckbox from "../layers/schools/SchoolLayerCheckbox";
import BaseLyerDropdown from "../baseLayer/BaseLayerDropdown";
const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <img id="map-icon" src="./lecture05/public/map.jpeg" />
          <div className="container-fluid justify-content-between">
            <div className="justify-content-start">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav-link">
                  <FocusUser />
                </li>
                <li className="nav-item nav-link">
                  <BaseLyerDropdown />
                </li>
              </ul>
            </div>
            <div className="justify-content-between">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav-link">
                  <KommunerCheckbox />
                </li>
                <li className="nav-item nav-link">
                  <FylkeCheckbox />
                </li>
                <li className="nav-item nav-link">
                  <SchoolLayerCheckbox />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
