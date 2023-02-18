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
              Real-Time Data team is digitalizing the data journey in agile way
              like never before
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
          <div
            class="col-lg-6 order-1 order-lg-2 home-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {" "}
            <Link to="/rtd-services">
              <img
                id="grow"
                src="assets/img/rtd_assets/buildings.png"
                class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
            <Link to="/deod">
              <img
                id="grow"
                src="assets/img/rtd_assets/single_building.png"
                class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
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
