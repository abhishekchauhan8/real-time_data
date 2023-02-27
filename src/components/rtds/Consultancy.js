import { Link } from "react-router-dom";

function Consultancy() {
  return (
    <div class="services2 topPadding">
      <div class="section-title">
        <h1 class="heading1">Consultancy</h1>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <img
            class="sevicesPageImg1"
            src="assets/img/rtd_assets/consultancy1.jpg"
          ></img>
        </div>

        <div class="col-lg-6">
          <h2 class="heading2">
            Shell business landscape calls for new strategies, technological
            innovation, and a holistic approach to the changing expectations of
            end users. To thrive amidst change, you need a transformative
            business strategy centered on your goal.
          </h2>
          <a href="#why-us" class="btn-get-started">
            Your goal, our strategy
          </a>{" "}
        </div>
      </div>
      <div class="justGap">{""}</div>

      <h1>Our Approach</h1>

      <img
        class="sevicesPageImg1"
        src="assets/img/rtd_assets/consultancy2.png"
      ></img>

      <div class="justGap">{""}</div>

      <h3>
        {" "}
        <b>Thoughts that you may have:</b>
      </h3>
      <ul>
        <li>
          <i class="ri-check-double-line"></i>
          Have ideas about improving your business operations but don’t know how
          to achieve it?
        </li>
        <li>
          <i class="ri-check-double-line"></i>
          Have a business/operational problem but don’t know how to resolve it?
        </li>
        <li>
          <i class="ri-check-double-line"></i>
          Don’t know which real-time data product fits your need?
        </li>
      </ul>

      <div class="justGap">{""}</div>

      <h3>
        {" "}
        <b>How can RTD Consultancy Services help you?</b>
      </h3>
      <ul>
        <li>
          <i class="ri-check-double-line"></i>
          Implement an asset-wide transformation, from vision and strategy to
          execution and outcomes.
        </li>
        <li>
          <i class="ri-check-double-line"></i>
          Ideate, create, and deploy new business models.
        </li>
        <li>
          <i class="ri-check-double-line"></i>
          Innovate for continuous value creation.
        </li>
      </ul>
    </div>
  );
}

export default Consultancy;
