import cow from "../assets/help-2.png";
import help from "../assets/help.jpg";
import Patients from "../components/Patients";
import WhatsappChat from "../components/WhatsappChat";

const Home = () => {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="row">
              {/* Text Section */}
              <div className="col-lg-6 text-content">
                <div className="home-info">
                  <h1>
                    Let&apos;s save our brothers and sisters, one contribution at a
                    time
                  </h1>

                  <p>
                    Make a difference today: donate to people and save a life
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

                  {/* Button */}
                  <div className="buttons">
                    <a href="#donation" className="btn1 py-3 px-4">
                      Donate now
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
                At ApatBandava, our mission is to provide critical support to
                individuals facing severe health challenges but struggling due
                to financial constraints. We are committed to ensuring that no
                one is denied life-saving medical care due to a lack of funds.
                By fostering a compassionate community and offering a platform
                for crowdfunding, ApatBandava connects patients in urgent need
                with generous donors who can help make a difference. Together,
                we can alleviate the financial burden of medical expenses and
                ensure that every patient receives the care they deserve,
                fostering hope and saving lives one contribution at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Patients />

      <section className="offer-section" id="offer">
        <div className="container">
          <div className="heading text-center mb-5">
            <h1>What We Offer?</h1>
          </div>

          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>Free Fundraiser Setup</h3>
                <p>Starting a fundraiser on Ketto is absolutely free.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>24x7 Assistance</h3>
                <p>
                  24x7 assistance from dedicated fundraiser managers throughout
                  your fundraising journey.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>Global Donations</h3>
                <p>
                  We accept donations in multiple currencies from anywhere in
                  the world.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>Easy Fund Withdrawal</h3>
                <p>
                  You can withdraw your funds at any point during the course of
                  your fundraiser.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>Real-Time Dashboard</h3>
                <p>
                  Get instant updates on your fundraiser&apos;s progress on a
                  real-time dashboard.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="offer-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>{" "}
                  {/* Font Awesome icon */}
                </div>
                <h3>Multiple Payment Options</h3>
                <p>
                  Accepts donations from all cards, net banking, UPI, and online
                  wallets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h1>Request a Call Back</h1>
            <p>
              Fill this form, to get in touch with us regarding{" "}
              <span>Donation</span> or <span>any other queries.</span>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12 mt-3">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile No."
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Estimated Amount ₹ Required (Rupees)"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="text"
                              id=""
                              rows="1"
                              placeholder="Why do you need the fund?"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 mt-3">
                        <a href="#" className="btn1 mt-5">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <WhatsappChat />
      </section>
    </>
  );
};

export default Home;
