import { Link } from "react-router-dom";

function RTDCC() {
  return (
    <section id="rtd" class="rtd">
      <div class="container2" data-aos="fade-up">
        <div class="section-title">
          <h2>OUR PRESENCE</h2>
        </div>
      </div>
      <div class="container" data-aos="zoom-in">
        <div class="row">
          <div class="hey under1 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/manufacturing">
              <img
                id="grow"
                src="assets\img\rtd_assets\extraction2.png"
                class="img1"
                // height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under2 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/transportation">
              <img
                id="grow"
                src="assets/img/rtd_assets/single_building.png"
                class="img2"
                // height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under3 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/retail">
              <img
                id="grow"
                src="assets/img/rtd_assets/wind_mill.png"
                class="img3"
                // height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          {/* <div class="hey under4 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/supportcenter2.png"
                class="img4"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}

          <div class="hey under5 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/buildings.png"
                class="img5"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under6 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/factory.png"
                class="img6"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          {/* <div class="hey under7 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/supportcenter2.png"
                class="img4"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}

          <div class="hey under8 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/3-etransport.png"
                class="img8"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under9 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_assets/loader-inner3.png"
                class="img9"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RTDCC;
