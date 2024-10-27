import { BsQrCodeScan } from "react-icons/bs";
import { FaHandshake, FaWallet, FaWhatsapp } from "react-icons/fa"; // Wallet icon for Platform Free
import "./WhatWeOffer.css";
const WhatWeOffer = () => {
  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <div className="heading text-center mb-5">
          <h1>What We Offer?</h1>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="offer-card">
              <div className="icon">
                <FaWallet size={40} />
              </div>
              <h3>₹ 0 Platform Free</h3>
              <p>Starting a fundraiser on ApathBandava is completely free.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="offer-card">
              <div className="icon">
                <FaHandshake size={50} />
              </div>
              <h3>No Middleman</h3>
              <p>
                Your contributions go directly to those in need, without any
                intermediaries or hidden fees.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="offer-card">
              <div className="icon">
                <BsQrCodeScan size={40} />
              </div>
              <h3>Scan & Pay</h3>
              <p>
                Simply scan the UPI QR, no complicated payment processes
                required.
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=+919380770883&text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 mt-2 whatsapp"
          >
            <FaWhatsapp className="btn-icon" />
            Chat On Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
