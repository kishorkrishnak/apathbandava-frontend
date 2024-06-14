import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import { uid } from "react-uid";
import kapilaQr from "../assets/kapila-qr.png";
import Pagination from "./Pagination/Pagination";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Gaushalas = () => {
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const [gaushalaIdToDonate, setGaushalaIdToDonate] = useState(null);
  const [gaushalaNameToDonate, setGaushalaNameToDonate] = useState("");

  const onOpenModal = (gaushalaName, gaushalaId) => {
    setGaushalaIdToDonate(gaushalaId);
    setGaushalaNameToDonate(gaushalaName);
    setOpen(true);
  };

  const onCloseModal = () => {
    setShowQr(false);
    setOpen(false);
  };
  const [gaushalas, setGaushalas] = useState(null);

  const fetchGaushalas = async () => {
    const response = await axios.get(`http://localhost:5000/api/gaushalas`);
    if (response.data.status === "success") {
      setGaushalas(response.data?.data);
    }
  };

  const submitDonorInfoAndShowQr = async () => {
    const response = await axios.post(
      `http://localhost:5000/api/gaushalas/${gaushalaIdToDonate}/donate`,
      {
        donorName,
        gaushala: gaushalaIdToDonate,
        phone,
        amount,
        message,
      }
    );

    if (response.data.status === "success") {
      setShowQr(true);
    }
  };

  useEffect(() => {
    fetchGaushalas();
  }, []);

  const ImageSliderStyle = { width: "100%", height: "100%" };

  const renderGaushalas = (currentItems) => {
    return currentItems?.map((gaushala) => {
      const images = gaushala.thumbnailImages.map((image) => {
        return {
          url: image,
        };
      });

      console.log(images);
      return (
        <div key={uid(gaushala)} className="col-md-6 col-lg-4">
          <div className="don-box">
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
                  borderRadius: 6,
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
            <h3>{gaushala.name}</h3>
            <p>Location: {gaushala.location}</p>
            <p>No of cows: {gaushala.noOfCows}</p>

            <button
              onClick={() => {
                onOpenModal(gaushala.name, gaushala._id);
              }}
              className="btn1"
            >
              Donate Now
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {gaushalas && gaushalas.length > 0 && (
        <section className="don-sec" id="donation">
          <div className="container flex">
            <div className="heading">
              <h2>Donate to a Gaushala</h2>
            </div>

            <Modal
              classNames={{
                modal: "paymentModal",
              }}
              open={open}
              onClose={onCloseModal}
              center
            >
              <h4 className="mt-4">Donate to {gaushalaNameToDonate}</h4>

              {showQr ? (
                <>
                  <Tabs>
                    <TabList>
                      <Tab>UPI</Tab>
                      <Tab>Bank Transfer</Tab>
                    </TabList>

                    <TabPanel>
                      <div className="qr-wrapper mt-3">
                        <img className="qr-image" src={kapilaQr} alt="qr" />

                        <a
                          className="btn1 openupi-btn mt-2"
                          href="upi://pay?pa=9544090119@ybl&pn=Kapila Park Goshala&cu=INR"
                        >
                          Open UPI App
                        </a>

                        <p className="thankyou-text mt-3">
                          Thank you for your donation! ❤️
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=" mt-3">
                        <p>Transfer directly to the following bank</p>

                        <div className="account-details d-flex flex-column align-items-start">
                          <ul>
                            <li>
                              <p>
                                Account Holder:{" "}
                                <span className="account-details-value">
                                  Kishor Krishna
                                </span>{" "}
                              </p>
                            </li>
                            <li>
                              <p>
                                Bank Name:{" "}
                                <span className="account-details-value">
                                  Bank Of Baroda
                                </span>{" "}
                              </p>
                            </li>

                            <li>
                              <p>
                                Bank Branch:{" "}
                                <span className="account-details-value">
                                  Puttur
                                </span>{" "}
                              </p>
                            </li>

                            <li>
                              <p>
                                Account No:{" "}
                                <span className="account-details-value">
                                123456789
                                </span>{" "}
                              </p>
                            </li>
                            <li>
                              <p>
                                IFSC Code:{" "}
                                <span className="account-details-value">
                              IFSC1234
                                </span>{" "}
                              </p>
                            </li>
                          </ul>
                          <p className="thankyou-text">
                          Thank you for your donation! ❤️
                        </p>
                        </div>


                        
                      </div>
                    </TabPanel>
                  </Tabs>
                </>
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
                                    onChange={(e) =>
                                      setDonorName(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile No."
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Amount"
                                    onChange={(e) => setAmount(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows="6"
                                    placeholder="Message (Optional)"
                                    onChange={(e) => setMessage(e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="donsubmit col-md-12 mt-3">
                              <button
                                onClick={submitDonorInfoAndShowQr}
                                className="btn1"
                                type="button"
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
                items={gaushalas}
                itemsPerPage={6}
                renderItems={renderGaushalas}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Gaushalas;
