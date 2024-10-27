// patient?.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Patient.css";

const Patient = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [patient, setPatient] = useState(null);

  const fetchPatient = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`
    );

    if (response.data.status === "success") {
      setPatient({
        ...response.data.data,
        daysLeft: 10,
        donators: 4,
        updates: [
          {
            date: "2024-10-20",
            text: "Successfully completed first phase of treatment",
          },
          { date: "2024-10-15", text: "Medical evaluation completed" },
        ],
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

                {/* Patient Info */}
                <div className="patient-info">
                  <h1>{patient?.name}</h1>
                  <div className="patient-details">
                    <span>{patient?.age} years</span>
                    <span className="separator">•</span>
                    <span>{patient?.disease}</span>
                  </div>
                  <p className="patient-description">{patient?.description}</p>
                </div>
              </div>

              {/* Updates Section */}
              <div className="patient-card">
                <h2>Patient Updates</h2>
                <div className="updates-container">
                  {patient?.updates?.map((update, idx) => (
                    <div key={idx} className="update-item">
                      <div className="update-date">{update.date}</div>
                      <p className="update-text">{update.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
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
                    <div>{patient?.donators} donators</div>
                    <div>{patient?.daysLeft} Days Left</div>
                  </div>
                </div>
                <button className="donate-btn">Donate Now</button>
              </div>

              <div className="patient-card hospital-info">
                <h3>Hospital Details</h3>
                <div className="hospital-details">
                  <p>
                    <strong>Hospital:</strong> {patient?.hospitalName}
                  </p>
                  <p>
                    <strong>Location:</strong> {patient?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Patient;
