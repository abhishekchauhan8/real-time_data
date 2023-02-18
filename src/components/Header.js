import NavBarRTD from "./rtd/NavBarRTD";
import NavBar from "./rtds/NavBarRTDS";

function Header() {
  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="#">Real-Time & Asset Management</a>
        </h1>
        <a href="https://eu001-sp.shell.com/sites/AAFAA1669/Pages/PI-Teams-Overview.aspx">
          <img
            src="assets/img/rtd_assets/real-time_logo.png"
            height="42"
            alt=""
          />
        </a>
        <NavBarRTD />
      </div>
    </header>
  );
}

export default Header;
