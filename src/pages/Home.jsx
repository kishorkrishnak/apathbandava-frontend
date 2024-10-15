import cow from "../assets/help-2.png";
import help from "../assets/help.jpg";
import wp from "../assets/wp.svg";
import Patients from "../components/Patients";
import WhatsappChat from "../components/WhatsappChat";

const Home = () => {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="row">
              <div className="col-lg-6 align-item-center">
                <div className="home-info">
                  <h1>
                    Let&apos;s save our brothers and sisters, one person at a
                    time
                  </h1>
                  <h2>
                    <span>AapatBandhava</span> helps to fund people going
                    through various health conditions
                  </h2>
                  <p>
                    Make a difference today: donate to people and save a life
                  </p>
                  <div className="buttons">
                    <a href="#donation" className="btn1">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-first order-lg-last">
                <div className="img-sec">
                  <img src={help} alt="home-image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Patients />

      <section className="about-sec" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={cow} alt="about"></img>
            </div>
            <div className="col-lg-8 order-first order-lg-last">
              <div className="heading">
                <h2>What We Do & Why We Do</h2>
              </div>
              <p>
                At AapatBandhava, our mission is to provide critical support to
                individuals facing severe health challenges but struggling due
                to financial constraints. We are committed to ensuring that no
                one is denied life-saving medical care due to a lack of funds.
                By fostering a compassionate community and offering a platform
                for crowdfunding, AapatBandhava connects patients in urgent need
                with generous donors who can help make a difference. Together,
                we can alleviate the financial burden of medical expenses and
                ensure that every patient receives the care they deserve,
                fostering hope and saving lives one contribution at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h2>Request a Call Back</h2>
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
        <WhatsappChat/>

      </section>
    </>
  );
};

export default Home;
