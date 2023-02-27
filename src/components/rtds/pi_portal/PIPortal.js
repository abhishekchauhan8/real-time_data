import { Link } from "react-router-dom";
import AboutPI from "./AboutPI";
import SideBar from "../Sidebar/Sidebar";
import "../Sidebar/sidebar.css";

function PIPortal() {
  return (
    <div class=" onlyTopPadding">
      <div class="main-container">
        <div>
          <SideBar />
        </div>
        <div class="topPadding2">
          <AboutPI />
        </div>
      </div>
    </div>
  );
}

export default PIPortal;
