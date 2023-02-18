import Contact from "../rtds/Contact";
import Footer from "../Footer";
import AboutPIServices from "../rtds/AboutPIServices";
import AboutPIServices_Framework from "../rtds/AboutPIServices_Framework";
import AboutPIServices_Journey from "../rtds/AboutPIServices_Journey";
import AboutPIServices_Why from "../rtds/AboutPIServices_Why";
import Dashboard from "../rtds/DashboardRTDS";
import Overview from "../rtds/Overview";
import Pricing from "../rtds/Pricing";
import Services from "../rtds/Services";
import TeamRTD from "../rtd/TeamRTD";
import RTDCC from "./RTD_cc";
import AboutRTD from "./AboutRTD";
import AboutRTDCC from "./AboutRTDCC";
import DashboardRTD from "./DashboardRTD";
import Header from "../Header";
import Skills from "./Skills";
import LOB from "./LOB";

function RTDMain() {
  return (
    <div className="App">
      {/* <Header /> */}
      <DashboardRTD />
      <main id="main">
        <LOB />

        <AboutRTDCC />

        <RTDCC />
        <Skills />
        <TeamRTD />
      </main>

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default RTDMain;
