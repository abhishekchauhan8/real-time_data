import { Link } from "react-router-dom";

function ServicesCards() {
  return (
    <section id="servicesCards" class="servicesCards">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Real-Time Data Services</h2>
          <p>
            A single shop for Realtime products, solutions and consultancy for
            various Business and Operational needs.
          </p>
        </div>
        <div class="card-grid">
          <Link to="/rtd-coe-services-consultancy" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image": "url(assets/img/rtd_assets/1_services.png)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">Consultancy</h2>
            </div>
          </Link>

          <Link to="/rtd-coe-services-endtoendsolutions" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image": "url(assets/img/rtd_assets/2_services.jpg)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">End-to-End Solutions</h2>
            </div>
          </Link>
          <Link to="/rtd-coe-services-diy" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image": "url(assets/img/rtd_assets/3_services.jpg)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">DIY</h2>
            </div>
          </Link>
          <Link to="/rtd-coe-services-readymadesolutions" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image": "url(assets/img/rtd_assets/4_services.jpg)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">Readymade Solutions</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
