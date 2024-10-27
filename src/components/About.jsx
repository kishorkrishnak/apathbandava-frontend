import cow from "../assets/help.png";
import "./About.css";

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={cow} alt="about"></img>
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <div className="heading">
              <h1 className="leftbar">What We Do</h1>
            </div>
            <p>
              At ApathBandava, our mission is to provide critical support to
              individuals facing health and educational challenges but
              struggling due to financial constraints. By fostering a
              compassionate community and offering a platform for crowdfunding,
              ApathBandava connects patients in urgent need with generous donors
              who can help make a difference. Together, we can alleviate the
              financial burden of medical and educational expenses and ensure
              that every human receives the care they deserve.
            </p>
            <div className="col-md-12 mt-2">
              <a href="#contact" className="btn1">
                Start Fundraiser
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
