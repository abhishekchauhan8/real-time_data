import { Link } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";

const DIY = () => {
  return (
    <div class="row topPadding">
      <div class="col-lg-1">
        <SideBar />
      </div>

      <div class="col-lg-11 services2">
        <h3>DIY</h3>
        <p>
          By incorporating decades of owner-operator experience and expertise,
          Shell provides innovative and optimized DIYs, technologies, and
          services that improve operations and increase ROI. Shell provides
          value-adding solutions, technologies, and services that drive the
          energy industry and the world forward. At Shell DIYs & Technologies,
          innovation lies at our core. We empower the industry with leading
          technology, DIYs, comprehensive solutions and proven expertise. In
          doing so, we’re transforming energy through progressive upstream and
          downstream technologies, extensive and collaborative services and
          support, and trusted, reliable, and unrivalled expertise.
        </p>
        <p>
          The PI System helps to effectively manage DIYs, attain sustainability
          goals, reduce costs, and increase productivity.​
        </p>
      </div>
    </div>
  );
};

export default DIY;
