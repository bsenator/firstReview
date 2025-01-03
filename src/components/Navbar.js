import React from "react";
import TopBanner from "../components/TopBanner";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            {/* <div className="navbar-brand">
              <span>
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width="70"
                  height="70"
                />
                <img
                  src="/assets/component.png"
                  className="img-fluid px-0 logo-text"
                  alt="Elif Ezgi | Hukuk Bürosu ve Danışmanlık"
                  width="200"
                  height="100"
                />
              </span>
            </div> */}

            <div className="navbar-brand ">
              <span className="brandAllContainer">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width="70"
                  height="70"
                />
                <div className="navbar-brand">
                  <h1>ELİF EZGİ</h1>
                  <h2 className="text-light">Hukuk ve Danışmanlık<br/>Bürosu</h2>
                </div>
              </span>
            </div>


            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links  */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Anasayfa
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/insolventa"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Hakkımızda
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/avocatura"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Çalışma Alanlarımız
                  </NavLink>
                </li>

                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/informatii-utile"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    İletişim
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
