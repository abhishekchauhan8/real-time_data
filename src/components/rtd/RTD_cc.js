import { Link } from "react-router-dom";

function RTDCC() {
  return (
    <section id="rtd" class="rtd">
      <div class="container" data-aos="zoom-in">
        <div class="row">
          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/manufacturing">
              <img
                id="grow"
                src="assets/img/rtd_cc/manufacturing.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/transportation">
              <img
                id="grow"
                src="assets/img/rtd_cc/transportation.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/retail">
              <img
                id="grow"
                src="assets/img/rtd_cc/retail.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_cc/operations.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/real-time_data_services">
              <img
                id="grow"
                src="assets/img/rtd_cc/se.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/img/rtd_cc/operations.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/extraction">
              <img
                id="grow"
                src="assets/img/rtd_cc/extraction.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/exploration">
              <img
                id="grow"
                src="assets/img/rtd_cc/exploration.png"
                // class="img-fluid"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/decisions">
              <img
                id="grow"
                src="assets/img/rtd_cc/decisions.png"
                // class="img-fluid"
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
