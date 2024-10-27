import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bank from "../../assets/bank.jpg";
import ThankYouMessage from "../../components/ThankYou";
import "./Patient.css";

const Patient = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [patient, setPatient] = useState(null);
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [proofModalOpen, setProofModalOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState(null);

  console.log(patient);

  const fetchPatient = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`
    );

    if (response.data.status === "success") {
      setPatient({
        ...response.data.data,
      });
    }
  };

  useEffect(() => {
    if (id) fetchPatient();
  }, [id]);

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === patient?.thumbnailImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? patient?.thumbnailImages.length - 1 : prev - 1
    );
  };

  const progressPercentage = Math.min(
    (patient?.amountRaised / patient?.amountRequired) * 100,
    100
  );

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setShowQr(false);
    setOpen(false);
  };

  const openProofModal = (proofUrl) => {
    setSelectedProof(proofUrl);
    setProofModalOpen(true);
  };

  const closeProofModal = () => {
    setSelectedProof(null);
    setProofModalOpen(false);
  };

  const submitDonorInfoAndShowQr = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}/donate`,
      {
        name: donorName,
        patient: id,
        phone,
        amount,
        message,
      }
    );

    if (response.data.status === "success") {
      setShowQr(true);
    }
  };

  return (
    <>
      {patient && (
        <div className="patient-container">
          <div className="patient-grid">
            {/* Left Column */}
            <div className="patient-main">
              <div className="patient-card">
                {/* Image Slider */}
                <div className="image-slider">
                  <img
                    src={patient?.thumbnailImages?.[activeImageIndex]}
                    alt={`Patient ${activeImageIndex + 1}`}
                    className="slider-image"
                  />
                  <button onClick={prevImage} className="slider-btn prev-btn">
                    &#10094;
                  </button>
                  <button onClick={nextImage} className="slider-btn next-btn">
                    &#10095;
                  </button>
                  <div className="slider-dots">
                    {patient?.thumbnailImages?.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${
                          idx === activeImageIndex ? "active" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="patient-info">
                  <h1>{patient?.name}</h1>
                  <div className="patient-details">
                    <span>{patient?.age} years</span>
                    <span className="separator">•</span>
                    <span>{patient?.disease}</span>
                  </div>
                  <p className="patient-description">
                    {" "}
                    <strong>"</strong>
                    {patient?.description}
                    <strong>"</strong>
                  </p>
                </div>
              </div>

              <div className="patient-card">
                <h2>Medical Proofs</h2>
                <div className="proofs-container">
                  {patient?.proofs?.map((proofUrl, idx) => (
                    <div
                      key={idx}
                      className="proof-item"
                      onClick={() => openProofModal(proofUrl)}
                    >
                      <img
                        src={proofUrl}
                        alt={`Medical Proof ${idx + 1}`}
                        className="proof-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="patient-sidebar">
              <div className="donation-card">
                <div className="donation-stats">
                  <div className="stat-row">
                    <span>Raised</span>
                    <span className="amount">
                      ₹{patient?.amountRaised?.toLocaleString()}
                    </span>
                  </div>
                  <div className="stat-row">
                    <span>Required</span>
                    <span className="amount">
                      ₹{patient?.amountRequired?.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="donation-meta">
                    <div>{patient?.donationCount} donators</div>
                    <div>{patient?.daysLeft} Days Left</div>
                  </div>
                </div>
                <button className="donate-btn" onClick={onOpenModal}>
                  Donate Now
                </button>
              </div>

              <div className="patient-card hospital-info">
                <h3>Hospital Details</h3>
                <div className="hospital-details">
                  <p>
                    <strong>Hospital:</strong> {patient?.hospitalName}
                  </p>
                  <p>
                    <strong>Location:</strong> {patient?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Proof Image Modal */}
          <Modal
            classNames={{
              modal: "proofModal",
            }}
            open={proofModalOpen}
            onClose={closeProofModal}
            center
          >
            <div className="proof-modal-content">
              <img
                src={selectedProof}
                alt="Medical Proof"
                className="proof-modal-image"
              />
            </div>
          </Modal>

          <Modal
            classNames={{
              modal: "paymentModal",
            }}
            open={open}
            onClose={onCloseModal}
            center
          >
            {showQr ? (
              <>
                <Tabs>
                  <TabList>
                    <Tab>UPI</Tab>
                    <Tab>Bank Transfer</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="qr-wrapper mt-3">
                      <img
                        className="qr-image"
                        src={patient.upiQrImage}
                        alt="qr"
                      />
                      <a
                        className="btn1 openupi-btn mt-2"
                        href={patient.upiLink}
                      >
                        Open UPI App
                      </a>
                      <ThankYouMessage />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-3">
                      <img height={50} className="mb-2" src={bank} alt="bank" />
                      <p>Transfer directly to the following bank account</p>
                      <div className="account-details">
                        <ul>
                          <li>
                            <p>
                              Account Holder:{" "}
                              <span className="account-details-value">
                                {patient.bankAccountHolder}
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Bank Name:{" "}
                              <span className="account-details-value">
                                {patient?.bankName}
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Account No:{" "}
                              <span className="account-details-value">
                                {patient.bankAccNo}
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              IFSC Code:{" "}
                              <span className="account-details-value">
                                {patient.bankIFSC}
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <ThankYouMessage />
                    </div>
                  </TabPanel>
                </Tabs>
              </>
            ) : (
              <div className="donation-form-container">
                <h2 className="form-title">Support {patient.name}</h2>
                <p className="form-subtitle">
                  Your contribution makes a difference
                </p>

                <div className="form-wrapper">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your name"
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Enter your mobile number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label>Donation Amount</label>
                    <div className="amount-input-wrapper">
                      <span className="currency-symbol">₹</span>
                      <input
                        type="text"
                        className="form-input amount-input"
                        placeholder="Enter amount"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Message (Optional)</label>
                    <textarea
                      className="form-input message-input"
                      rows="4"
                      placeholder="Write a message of support..."
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    onClick={submitDonorInfoAndShowQr}
                    className="submit-button"
                    type="button"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  );
};

export default Patient;
