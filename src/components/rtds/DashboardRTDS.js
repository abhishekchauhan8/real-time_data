import Clock from "./Clock";

function DashboardRTDS() {
  return (
    <section id="home" class="d-flex align-items-center">
      <div class="container3">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
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
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardRTDS;
