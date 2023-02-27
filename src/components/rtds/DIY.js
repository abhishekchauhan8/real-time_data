import { Link } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";

const DIY = () => {
  return (
    <div class="row onlyTopPadding">
      <div class="col-lg-1">
        <SideBar />
      </div>

      <div class="col-lg-11 services2 topPadding2">
        <div class="section-title">
          <h1 class="heading1">DIY</h1>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <img
              class="sevicesPageImg1"
              src={"assets/img/rtd_assets/diy1.jpg"}
              alt=""
            ></img>
          </div>

          <div class="col-lg-6">
            <h2 class="heading2">
              DIY solutioning is integral to the democratization of Digital,
              which is a key enabler of Shell’s aspiration of becoming a more
              simplified organization. This is also integral to our strategy of
              powering progress through digitalization. Enabling users to solve
              business problems by implementing real-time solutions allows us to
              increase our speed of delivery.
            </h2>
            <a href="#why-us" class="btn-get-started">
              You dream it, you build it
            </a>{" "}
          </div>
        </div>
        <div class="justGap">{""}</div>
        <h1>Our Approach</h1>

        <img class="sevicesPageImg1" src="assets/img/rtd_assets/diy2.png"></img>

        <div class="justGap">{""}</div>

        <h3>
          {" "}
          <b>Thoughts that you may have:</b>
        </h3>
        <ul>
          <li>
            <i class="ri-check-double-line"></i>
            Have ideas about improving your business operations but don’t know
            how to achieve it?
          </li>
          <li>
            <i class="ri-check-double-line"></i>
            Have a business/operational problem but don’t know how to resolve
            it?
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
    </div>
  );
};

export default DIY;
