import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { uid } from "react-uid";
import bank from "../assets/bank.jpg";
import kapilaQr from "../assets/kapila-qr.png";
import ThankYouMessage from "./ThankYou";

const Patients = () => {
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [patientIdToDonate, setPatientIdToDonate] = useState(null);
  const [patientNameToDonate, setPatientNameToDonate] = useState("");
  const [patients, setPatients] = useState([]);
  const [displayCount, setDisplayCount] = useState(3); // State to track number of patients to display

  const onOpenModal = (patientName, patientId) => {
    setPatientIdToDonate(patientId);
    setPatientNameToDonate(patientName);
    setOpen(true);
  };

  const onCloseModal = () => {
    setShowQr(false);
    setOpen(false);
  };

  const fetchPatients = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients`
    );
    if (response.data.status === "success") {
      setPatients(response.data.data);
    }
  };

  const submitDonorInfoAndShowQr = async () => {
    const response = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/patients/${patientIdToDonate}/donate`,
      {
        name: donorName,
        patient: patientIdToDonate,
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
    fetchPatients();
  }, []);

  const ImageSliderStyle = { width: "100%", height: "100%" };

  const renderPatients = () => {
    return patients.slice(0, displayCount).map((patient) => {
      const images = patient.thumbnailImages.map((image) => {
        return {
          url: image,
        };
      });
      const progressPercentage = Math.min(
        (patient.amountRaised / patient.amountRequired) * 100,
        100
      );
      return (
        <div key={uid(patient)} className="col-md-6 col-lg-4">
          <div
            className="don-box"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
              <h4 className="mt-4">{patient.name}</h4>
              <p>Condition: {patient.disease}</p>
              <p
                style={{
                  fontWeight: 600,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                &quot;{patient.description}&quot;
              </p>
              <p>
                <span className="raised">₹{patient.amountRaised}</span> Raised
                out of ₹{patient.amountRequired}
              </p>

              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            <Link
              to={`/patient/${patient._id}`}
              // onClick={() => {
              //   onOpenModal(patient.name, patient._id);
              // }}
              className="btn2 mt-2"
            >
              Donate Now
            </Link>
          </div>
        </div>
      );
    });
  };

  const loadMorePatients = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  return (
    <>
      {patients.length > 0 && (
        <section className="don-sec" id="donation">
          <div className="container flex">
            <div className="heading">
              <h1 className="leftbar">Active Fundraisers</h1>
            </div>

            <Modal
              classNames={{
                modal: "paymentModal",
              }}
              open={open}
              onClose={onCloseModal}
              center
            >
              <h4 className="mt-4">Donate to {patientNameToDonate}</h4>

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
                        <ThankYouMessage personName={patientNameToDonate} />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=" mt-3">
                        <img
                          height={50}
                          className="mb-2"
                          src={bank}
                          alt="bank"
                        />
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
                        </div>
                        <ThankYouMessage personName={patientNameToDonate} />
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
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              onChange={(e) => setDonorName(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile No."
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Amount"
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="6"
                              placeholder="Message (Optional)"
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                          <div className="donsubmit mt-3">
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
              )}
            </Modal>

            <div className="row row-gap-4">{renderPatients()}</div>

            {displayCount < patients.length && (
              <p
                className="text-center col-md-12 loadmore-btn mt-5"
                onClick={loadMorePatients}
              >
                Load More
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Patients;
