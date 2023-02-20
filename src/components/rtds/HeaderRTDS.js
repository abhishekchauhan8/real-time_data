// import NavBar from "./rtds/NavBarRTDS";

import NavBar from "./NavBarRTDS";

function HeaderRTDS() {
  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="/">Real-Time & Asset Management</a>
        </h1>
        <a href="https://eu001-sp.shell.com/sites/AAFAA1669/Pages/PI-Teams-Overview.aspx">
          <img
            src="assets/img/rtd_assets/realtime_logo.png"
            height="42"
            alt=""
          />
        </a>
        <NavBar />
      </div>
    </header>
  );
}

export default HeaderRTDS;
