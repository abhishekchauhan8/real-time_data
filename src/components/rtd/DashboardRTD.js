import { Link } from "react-router-dom";
import Clock from "../rtds/Clock";
import AboutRTD from "./AboutRTD";
import AboutRTDCC from "./AboutRTDCC";
import RTDCC from "./RTD_cc";

function DashboardRTD() {
  return (
    <section id="home" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Better Solutions for Better Operations</h1>
            <h2>
              Real-Time team is digitalizing the data journey in agile way like
              never before
            </h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              {" "}
              {/* <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>{" "}
              <a
                href="https://www.youtube.com/watch?v=PSq7sDBeKxA"
                class="glightbox btn-watch-video"
              >
                <i class="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a> */}
              <Clock />
            </div>
          </div>
          {/* <div
            class="col-lg-6 order-1 order-lg-2 home-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {" "}
            <Link to="/rtd-coe">
              <img
                id="grow"
                src="assets/img/rtd_assets/buildings.png"
                class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
            <div class="underMonitoring">
              <Link to="/monitoring">
                <img
                  id="grow"
                  src="assets/img/rtd_assets/loader-inner3.png"
                  class="imgMonitoring"
                  height="300px"
                  alt=""
                />
              </Link>
            </div>
            <Link to="/deod">
              <img
                id="grow"
                src="assets/img/rtd_assets/single_building.png"
                class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}
          {/* <div
            class="col-lg-6 order-1 order-lg-2 home-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {" "}
            <Link to="/rtd-coe">
              <img
                id="grow"
                src="assets/img/realtime_assets/All-in-One_IV-transformed.png"
                class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}
          <div
            class="col-lg-6 order-1 order-lg-2 home-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="under0">
              <img
                // id="grow"
                src="assets/img/realtime_assets/Earth.png"
                class="imgRT0"
                height="300px"
                alt=""
              />
            </div>
            <div class="under1">
              <Link to="/">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/RealTime.png"
                  class="imgRT1"
                  height="300px"
                  alt=""
                  title="Marcel"
                />
              </Link>
            </div>
            <div class="under2">
              <Link to="/rtd-coe">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/RealTimeData.png"
                  class="imgRT2"
                  height="300px"
                  alt=""
                  title="Real Time Data"
                />
              </Link>
            </div>

            <div class="under3">
              <Link to="/monitoring">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/ProactiveMonitoring.gif"
                  class="imgRT3"
                  height="300px"
                  alt=""
                  title="Proactive Monitoring"
                />
              </Link>
            </div>

            <div class="under4">
              <Link to="/deod">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/DEOD.gif"
                  class="imgRT4"
                  height="300px"
                  alt=""
                  title="DEOD"
                />
              </Link>
            </div>

            <div class="under5">
              <Link to="/energy_components">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/EnergyComponents.png"
                  class="imgRT5"
                  height="300px"
                  alt=""
                  title="Energy Components"
                />
              </Link>
            </div>

            <div class="under6">
              <Link to="/labs_rd_ai">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/LabsRDAndAI.png"
                  class="imgRT6"
                  height="300px"
                  alt=""
                  title="Labs, R&D and AI"
                />
              </Link>
            </div>

            <div class="under7">
              <Link to="/ams">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/AssetManagementSystems.png"
                  class="imgRT7"
                  height="300px"
                  alt=""
                  title="Asset Management Systems"
                />
              </Link>
            </div>

            <div class="under8">
              <Link to="/advanced_processes">
                <img
                  id="grow"
                  src="assets/img/realtime_assets/AssetManagementSystems.png"
                  class="imgRT8"
                  height="300px"
                  alt=""
                  title="Advanced Processes"
                />
              </Link>
            </div>

            <div class="underBubble" data-aos="zoom-in" data-aos-delay="200">
              <img
                src="assets/img/realtime_assets/chatbubble1.png"
                class="imgBubble animated"
                // height="300px"
                alt=""
                // title="Advanced Processes"
              />
            </div>
          </div>
        </div>

        {/* <div>
          <h2>
            Real-Time Data team is digitalizing the data journey in agile way
            like never before
          </h2>
        </div> */}
      </div>
    </section>
  );
}

export default DashboardRTD;
