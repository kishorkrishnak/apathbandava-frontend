import cow from "../assets/help-2.png";
import Patients from "../components/Patients";
import RequestCallback from "../components/RequestCallback";
import Students from "../components/Students";
import WhatWeOffer from "../components/WhatWeOffer";
const Home = () => {
  return (
    <>
      <section className="home-sec" id="home">
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

                  {/* Metrics Section */}
                  <div className="metrics">
                    <div className="metric-item">
                      <h3>0%</h3>
                      <p>Platform Fees</p>
                    </div>
                    <div className="metric-item">
                      <h3>24/7</h3>
                      <p>Support</p>
                    </div>
                    <div className="metric-item">
                      <h3>100%</h3>
                      <p>Impact</p>
                    </div>
                  </div>

                  <a
                    href="#donation"
                    className="btn1 btn-donate-hero  py-3 px-4"
                  >
                    Donate or Start a Fundraiser Now!
                  </a>
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
      <Students />

      <WhatWeOffer />
      <RequestCallback />
    </>
  );
};

export default Home;
