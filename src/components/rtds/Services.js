import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Services</h2>
          <p>We pledge to make the business better and faster</p>
        </div>
        <div class="row">
          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/rtd-coe/services-consultancy">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Consultancy</a>
                </h4>
                <p>
                  Stuck somewhere ? Consult without wasting single more second.
                </p>
              </div>
            </Link>
          </div>
          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link to="/rtd-coe/services-ready_made_solutions">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">Ready-Made Solutions</a>
                </h4>
                <p>Get the operations started hassle-free.</p>
              </div>
            </Link>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {" "}
            <Link to="/rtd-coe/services-diy">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="">DIY</a>
                </h4>
                <p>Help yourself using templatized solutions</p>
              </div>
            </Link>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/rtd-coe/services-trainings">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4>
                  <a href="">Trainings</a>
                </h4>
                <p>Get on-site or online training as and when required.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
