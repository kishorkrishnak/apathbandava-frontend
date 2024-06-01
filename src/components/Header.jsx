import React from "react";
import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
const Header = () => {
  return (
    <div className="fixed-top">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#home">
              Go Nidhi
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#donation">
                    Donations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mission-id">
                    Missions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="cont-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                Contact No : <a href="tel: +9230059****59">+91 9380770883</a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="social">
              <a href="#">
                  <img src={facebook} alt="facebook"></img>
                </a>
                <a href="#">
                  <img src={instagram} alt="inatagram"></img>
                </a>

                <a href="#">
                  <img src={gmail} alt="gmail"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
