import React from 'react';
import hero from "../assets/hero.jpg";
import './Hero.css';

const Hero = () => {
  return (
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
  )
}

export default Hero
