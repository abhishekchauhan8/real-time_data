import { Link } from "react-router-dom";

function ReadyMadeSolutions() {
  return (
    <div class="services2 topPadding">
      <div class="section-title">
        <h1 class="heading1">Ready Made Solutions</h1>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <img
            class="sevicesPageImg1"
            src={"assets/img/rtd_assets/readymade1.jpg"}
            alt=""
          ></img>
        </div>

        <div class="col-lg-6">
          <h2 class="heading2">
            Real-time readymade solutions are pre-built solutions that enable
            quick and easy implementation of real-time capabilities in business
            workflows. These solutions offer a range of features and
            functionalities, such as data processing, analytics, monitoring, and
            visualization, that can be easily integrated into an existing
            system.
          </h2>
          <a href="#why-us" class="btn-get-started">
            Ready to use, right out of the box
          </a>{" "}
        </div>
      </div>
      <div class="justGap">{""}</div>

      <h1>Our Approach</h1>

      <img
        class="sevicesPageImg1"
        src="assets/img/rtd_assets/readymade2.png"
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
        <b>How can RTD Ready Made Solutions Services help you?</b>
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

export default ReadyMadeSolutions;
