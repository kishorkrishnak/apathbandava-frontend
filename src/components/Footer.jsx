import React from "react";
import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-one">
              <h4>MAB CORP foundation</h4>
              <p>Address : 3, Near IT Park, GT Road, Lahore 440000 </p>
              <p>
                Contact No : <a href="tel: +92 30059****59">+92 30059****59</a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:foundation@mabcorp.com">
                  foundation@mabcorp.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-two">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#donation">Donations</a>
                </li>
                <li>
                  <a href="#mission-id">Missions</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-one">
              <h4>Social Media</h4>
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
              <p>Copyright &copy; 2024 | All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
