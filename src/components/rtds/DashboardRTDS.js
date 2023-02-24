import Clock from "./Clock";

function DashboardRTDS() {
  return (
    <section id="rtdshome" class="d-flex align-items-center">
      <div class="container3">
        <div class="row">
          <div
            class="col-lg-6 overVideo d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Real-Time Data CoE</h1>

            <h2>
              We are literally the Center of Excellence. From Acquisition to
              Delivery, we cover all aspects.
            </h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              {" "}
              <a href="#why-us" class="btn-get-started scrollto">
                RTD Services
              </a>{" "}
              <a
                href="https://www.youtube.com/watch?v=8pQKh31PGvU"
                class="glightbox btn-watch-video"
              >
                <i class="bi bi-play-circle"></i>
                <span>Take a Tour</span>
              </a>
            </div>
          </div>
          {/* <video class="videoTag underVideo" autoPlay loop muted>
            <source src={"/assets/videos/bg_video.mp4"} type="video/mp4" />
          </video> */}

          <section id="bgAnimate" class="bgAnimate">
            <div class="container">
              <div class="bubbles">
                <span style={{ "--i": "11" }}></span>

                <span style={{ "--i": "12" }}></span>

                <span style={{ "--i": "24" }}></span>

                <span style={{ "--i": "10" }}></span>

                <span style={{ "--i": "14" }}></span>

                <span style={{ "--i": "23" }}></span>

                <span style={{ "--i": "18" }}></span>

                <span style={{ "--i": "16" }}></span>

                <span style={{ "--i": "19" }}></span>

                <span style={{ "--i": "20" }}></span>

                <span style={{ "--i": "22" }}></span>

                <span style={{ "--i": "25" }}></span>

                <span style={{ "--i": "18" }}></span>

                <span style={{ "--i": "21" }}></span>

                <span style={{ "--i": "15" }}></span>

                <span style={{ "--i": "13" }}></span>

                <span style={{ "--i": "26" }}></span>

                <span style={{ "--i": "17" }}></span>

                <span style={{ "--i": "13" }}></span>

                <span style={{ "--i": "28" }}></span>

                <span style={{ "--i": "11" }}></span>

                <span style={{ "--i": "12" }}></span>

                <span style={{ "--i": "24" }}></span>

                <span style={{ "--i": "10" }}></span>

                <span style={{ "--i": "14" }}></span>

                <span style={{ "--i": "23" }}></span>

                <span style={{ "--i": "18" }}></span>

                <span style={{ "--i": "16" }}></span>

                <span style={{ "--i": "19" }}></span>

                <span style={{ "--i": "20" }}></span>

                <span style={{ "--i": "22" }}></span>

                <span style={{ "--i": "25" }}></span>

                <span style={{ "--i": "18" }}></span>

                <span style={{ "--i": "21" }}></span>

                <span style={{ "--i": "15" }}></span>

                <span style={{ "--i": "13" }}></span>

                <span style={{ "--i": "26" }}></span>

                <span style={{ "--i": "17" }}></span>

                <span style={{ "--i": "13" }}></span>

                <span style={{ "--i": "28" }}></span>
              </div>
            </div>
          </section>

          {/* <div
            class="col-lg-6 order-1 order-lg-2 home-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {" "}
            <img
              src="assets/img/rtd_assets/business-salesman.gif"
              class="img-fluid2 animated"
              alt=""
            />
          </div> */}

          {/* <div class="services section-bg">
            <div class="container" data-aos="fade-up">
              <div class="row">
                <div
                  class="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bxl-dribbble"></i>
                    </div>
                    <h4>
                      <a href="">Consultancy</a>
                    </h4>
                    <p>
                      Stuck somewhere ? Consult without wasting single more
                      second.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default DashboardRTDS;
