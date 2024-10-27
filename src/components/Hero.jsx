import React from 'react';
import hero from "../assets/hero.jpg";
import { FaHeart, FaHandsHelping } from 'react-icons/fa';
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
                <div className="badge">
                  <FaHeart className="badge-icon" />
                  <span>Together We Can Make A Difference</span>
                </div>
                <h1 className="animate-fade-in">
                  Let's save our brothers and sisters, 
                  <span className="highlight"> one contribution at a time</span>
                </h1>
                <p className="animate-fade-in-delay">
                  Make a difference today: donate to people and save a soul!
                  Join our community of givers and create lasting impact.
                </p>
                <div className="hero-buttons animate-fade-in-delay-2">
                  <a href="#patients-section" className="btn-primary">
                    <FaHeart className="btn-icon" />
                    <span>Donate Now</span>
                  </a>
                  <a href="#contact" className="btn-secondary">
                    <FaHandsHelping className="btn-icon" />
                    <span>Start a Fundraiser</span>
                  </a>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;