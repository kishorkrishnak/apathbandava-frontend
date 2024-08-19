import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/logo.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-one">
              <a className="navbar-brand" href="/">
                <img src={logo} className="logo footer-logo" alt="" />
                Gau Nidhi
              </a>
              <p className="mt-2">
                Address : Mura, Puttur, Dakshina Kannada, Karnataka, 574220{" "}
              </p>
              <p>
                Contact No : <a href="tel: +91 9380770883">+91 9380770883</a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:gaunidhiseva@gmail.com">
                  gaunidhiseva@gmail.com
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
                  <img src={instagram} alt="instagram"></img>
                </a>

                <a href="#">
                  <img src={youtube} alt="youtube"></img>
                </a>
                <a href="mailto:gaunidhi@gmail.com">
                  <img src={gmail} alt="gmail"></img>
                </a>
              </div>
              <p>Copyright &copy; 2024. All Right Reserved</p>
              <div>
                <p>
                  Developed By{" "}
                  <a
                    className="dev-name"
                    href="https://github.com/kishorkrishnak"
                  >
                    Kishor Krishna
                  </a>
                </p>
                <p>Phone - 9544090119</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
