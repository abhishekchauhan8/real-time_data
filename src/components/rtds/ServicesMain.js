import Contact from "./Contact";
import Footer from "../Footer";
import AboutPIServices from "./AboutPIServices";
import AboutPIServices_Framework from "./AboutPIServices_Framework";
import AboutPIServices_Journey from "./AboutPIServices_Journey";
import AboutPIServices_Why from "./AboutPIServices_Why";
import Dashboard from "./DashboardRTDS";
import Overview from "./Overview";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";
import RTDCC from "../rtd/RTD_cc";
import HeaderRTDS from "./HeaderRTDS";

function ServicesMain() {
  return (
    <div className="App">
      <HeaderRTDS />
      <Dashboard />

      <Overview />
      <AboutPIServices />
      <AboutPIServices_Why />

      <Services />
      <Pricing />
      <AboutPIServices_Framework />
      <AboutPIServices_Journey />

      <Team />
      {/* <FAQs /> */}
      <Contact />

      <Footer />

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default ServicesMain;
