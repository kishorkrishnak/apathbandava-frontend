import React from "react";
import cows from "../assets/cows.jpg";
import cow from "../assets/cow1.png";

const Home = () => {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="row">
              <div className="col-lg-6 align-item-center">
                <div className="home-info">
                  <h1>Let's save our goshalas, one step at a time</h1>
                  <h2>
                    We <span>Go Nidhi</span> helps to fund various goshalas
                  </h2>
                  <p>
                    Make a difference today: donate to Go Nidhi and save our gomatha
                  </p>
                  <div className="buttons">
                    <a href="#contact" className="btn1">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-first order-lg-last">
                <div className="img-sec">
                  <img src={cows} alt="home-image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="don-sec" id="donation">
        <div className="container">
          <div className="heading">
            <h2>We Manage Wastage or Donation like..</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/clothing.png" alt="img"></img>
                <h3>Clothes</h3>
                <p>
                  Give your clothes a second chance: donate them today and help
                  make a difference.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/sneakers.png" alt="img"></img>
                <h3>Footware</h3>
                <p>
                  Step up and make a difference: donate your footwear today and
                  help those in need.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/salary.png" alt="img"></img>
                <h3>Fund</h3>
                <p>
                  Your donation can make a world of difference: give today to
                  support our cause and help those in need.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/gadgets.png" alt="img"></img>
                <h3>Gadgets</h3>
                <p>
                  Unlock the power of giving: donate your gadgets today and help
                  bridge the digital divide for those in need.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/book.png" alt="img"></img>
                <h3>Stationary</h3>
                <p>
                  Make a mark in someone's life: donate your stationery today
                  and help provide educational resources for those in need.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src="img/don/shopping-bag.png" alt="img"></img>
                <h3>Food</h3>
                <p>
                  Feed a hungry mouth today: donate food and help fight hunger
                  in your community.
                </p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
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
                <h2>What We Do & Why We Do</h2>
              </div>
              <p>
                At [Welfare Foundation Name], we believe that everyone deserves
                the chance to live a healthy and fulfilling life. Our mission is
                to improve the lives of people in need by providing access to
                basic necessities such as food, shelter, education, and
                healthcare. We work tirelessly to identify the most pressing
                needs in our community and develop programs and initiatives to
                address those needs.{" "}
              </p>
              <p>
                Through our fundraising efforts and the generous support of our
                donors, we are able to make a positive impact on the lives of
                thousands of people every year. Whether it's providing a warm
                meal to someone in need or helping a child receive an education,
                we are dedicated to making a difference in our community and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h2>Connect With Us</h2>
            <p>
              Fill this form, our team will collect your <span>Donation</span>{" "}
              or <span>Wastage</span> from your place.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
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
                            <select name="donation" id="donation">
                              <option value="">
                                Choose Donation or Wastage
                              </option>
                              <option value="food">Food</option>
                              <option value="clothes">Clothes</option>
                              <option value="footware">Footware</option>
                              <option value="books">Books</option>
                              <option value="fund">Fund</option>
                              <option value="gadget">Ele. Gadgets</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="text"
                            id=""
                            cols="90"
                            rows="1"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 mt-3">
                        <a href="#" className="btn1 mt-5">
                          Submit Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
