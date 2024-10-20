import cow from "../assets/help-2.png";
import hero from "../assets/hero.jpg";
import Patients from "../components/Patients";
import RequestCallback from "../components/RequestCallback";
import WhatWeOffer from "../components/WhatWeOffer";
const Home = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('${hero}')`,
        }}
        className="home-sec"
        id="home"
      >
        <div className="container">
          <div className="home-content">
            <div className="row">
              <div className="col-lg-6 text-content">
                <div className="home-info">
                  <h1>
                    Let&apos;s save our brothers and sisters, one contribution
                    at a time
                  </h1>

                  <p>
                    Make a difference today: donate to people and save a soul!
                  </p>

                  <div
                  className="hero-buttons"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <a
                      href="#donation"
                      className="btn1 btn-donate-hero py-3 px-4"
                    >
                      Donate
                    </a>
                    <a
                      href="#contact"
                      className="btn1 btn-donate-hero  py-3 px-4"
                    >
                      Start a Fundraiser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={cow} alt="about"></img>
            </div>
            <div className="col-lg-8 order-first order-lg-last">
              <div className="heading">
                <h1 className="leftbar">What We Do & Why We Do</h1>
              </div>
              <p>
                At ApathBandava, our mission is to provide critical support to
                individuals facing health and educational challenges but
                struggling due to financial constraints. By fostering a
                compassionate community and offering a platform for
                crowdfunding, ApathBandava connects patients in urgent need with
                generous donors who can help make a difference. Together, we can
                alleviate the financial burden of medical and educational
                expenses and ensure that every human receives the care they
                deserve, fostering hope and saving lives one contribution at a
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Patients />
      {/* <Students /> */}

      <WhatWeOffer />
      <RequestCallback />
    </>
  );
};

export default Home;
