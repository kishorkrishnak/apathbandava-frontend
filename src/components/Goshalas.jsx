import kapila from "../assets/kapila.jpg";
import { uid } from "react-uid";
import Pagination from "./Pagination/Pagination";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import toast from "react-hot-toast";
import kapilaQr from "../assets/kapila-qr.png";
import SimpleImageSlider from "react-simple-image-slider";
const Goshalas = () => {
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => {
    setShowQr(false);
    setOpen(false);
  };
  const goshalas = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 144, 1515, 15, 15];

  const submitDonorInfoAndShowQr = () => {
    setShowQr(true);
  };

  const images = [
    { url: kapila },
    { url: kapila },
    { url: kapila },
    { url: kapila },
    { url: kapila },
    { url: kapila },
  ];

  const ImageSliderStyle = { width: "100%", height: "100%" };

  const renderGoshalas = (currentItems) => {
    return currentItems?.map((goshala) => (
      <div key={uid(goshala)} className="col-md-6 col-lg-4">
        <div className="don-box">
          {/* <img src={kapila} alt="img"></img> */}
          <div
            style={{
              position: "relative",
              minHeight: 200,
              objectFit: "cover",
            }}
          >
            <SimpleImageSlider
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
              }}
              width={ImageSliderStyle.width}
              height={ImageSliderStyle.height}
              navStyle={2}
              navSize={35}
              navMargin={6}
              autoPlay
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h3>Kapila Park Goshala</h3>
          <p>Location: Kenjar HC, Karnataka</p>
          <p>No of cows: 300</p>

          <button onClick={onOpenModal} className="btn1">
            Donate Now
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="don-sec" id="donation">
        <div className="container">
          <div className="heading">
            <h2>Donate to a Goshala</h2>
          </div>
          <Modal open={open} onClose={onCloseModal} center>
            <h3 className="mt-4">Donate to Kapila Park Goshala</h3>

            {showQr ? (
              <div className="qr-wrapper mt-3">
                <img className="qr-image" src={kapilaQr} alt="" />

                <a
                  className="btn1 openupi-btn mt-2"
                  href="upi://pay?pa=9544090119@ybl&pn=Kapila Park Goshala&cu=INR"
                >
                  Open UPI App
                </a>
              </div>
            ) : (
              <div className="container donation-form mt-4">
                <div className="row">
                  <div className="contact-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-12">
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
                                  placeholder="Amount"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="donsubmit col-md-12 mt-3">
                            <button
                              onClick={submitDonorInfoAndShowQr}
                              className="btn1"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
          <div className="row">
            <Pagination
              items={goshalas}
              itemsPerPage={6}
              renderItems={renderGoshalas}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Goshalas;
