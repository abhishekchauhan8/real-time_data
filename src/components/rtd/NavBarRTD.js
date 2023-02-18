import { Link } from "react-router-dom";

function NavBarRTD() {
  var address = "real-time_data_services";

  return (
    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <a class="nav-link scrollto active" href="#home">
            Home
          </a>
        </li>

        {/* <li>
          <a class="nav-link scrollto" href="#about">
            Overview
          </a>
        </li> */}

        <li class="dropdown">
          <a href="#">
            <span>Overview</span> <i class="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a class="nav-link scrollto" href="#about">
                What is Real-Time CC
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#rtd">
                <span>Our Presence</span>{" "}
              </a>
            </li>
            <li>
              <a href="#skills">Where we Fit In</a>
            </li>
            <li>
              <a href="#skills">What we Do</a>
            </li>
            <li>
              <a href="#skills">Who we work with</a>
            </li>
            <li>
              <a href="#skills">Partners</a>
            </li>
            <li>
              <a href="#skills">Who we work for</a>
            </li>
            <li>
              <a href="#journey">Real Time Data Services Journey</a>
            </li>
          </ul>
        </li>

        <li>
          <a class="nav-link scrollto" href="#services">
            Topic Teams
          </a>
        </li>

        {/* <li>
          <a class="nav-link scrollto" href="#portfolio">
            Portfolio
          </a>
        </li> */}

        <li class="dropdown">
          <a href="#">
            <span>Concepts</span> <i class="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li class="dropdown">
              <Link to="/catalyst">What is Real-Time</Link>
            </li>
            <li>
              <Link to="/downstream">What is Asset Management</Link>
            </li>
            <li>
              <Link to="/energyrenewables">What is Industrial Automation</Link>
            </li>
            <li>
              <Link to="/hydrogen">What is IIoT</Link>
            </li>
          </ul>
        </li>

        {/* <li class="dropdown">
          <Link href="#">
            <span>Use Cases</span> <i class="bi bi-chevron-down"></i>
          </Link>
          <ul>
            <li>
              <Link to="/cemis">CO2 Emission Management</Link>
            </li>

            <li class="dropdown">
              <Link to="/productionoptimization">Production Optimization</Link>
            </li>
            <li class="dropdown">
              <Link to="/advancesurveillance">Advance Surveillance</Link>
            </li>
            <li>
              <Link to="/assetperformance">Asset Performance</Link>
            </li>
            <li>
              <Link to="/conditionbasedmaintenance">
                Condition Based Maintenance
              </Link>
            </li>
            <li>
              <Link to="/energymanagement">Energy Management</Link>
            </li>
            <li>
              <Link to="/hydrogensefuelstation">Hydrogen Refuel Station</Link>
            </li>
            <li>
              <Link to="/offshorewindpark">Offshore Windpark</Link>
            </li>
            <li>
              <Link to="/remotemonitoring">Remote Monitoring</Link>
            </li>
            <li>
              <Link to="/teba">TEBA - Top Energy Bad Actors</Link>
            </li>
            <li>
              <Link to="/tega">TEGA - Top Energy Goood Actors</Link>
            </li>
            <li>
              <Link to="/windtopia">Windtopia</Link>
            </li>
          </ul>
        </li> */}

        {/* <li>
          <a class="nav-link scrollto" href="piservices#pricing">
            Pricing
          </a>
        </li> */}

        <li>
          <a class="nav-link scrollto" href="#team">
            Team
          </a>
        </li>

        <li>
          <a class="nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>

        {/* <li>
          <a class="getstarted scrollto" href="#about">
            Get Started
          </a>
        </li> */}
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}

export default NavBarRTD;
