import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [showShareAlert, setShowShareAlert] = useState(false);

  const fetchPatients = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients`
    );
    if (response.data.status === "success") {
      setPatients(response.data.data);
      const indexes = {};
      response.data.data.forEach((patient) => {
        indexes[patient._id] = 0;
      });
      setCurrentImageIndexes(indexes);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const nextImage = (patientId, maxLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [patientId]: (prev[patientId] + 1) % maxLength,
    }));
  };

  const prevImage = (patientId, maxLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [patientId]: (prev[patientId] - 1 + maxLength) % maxLength,
    }));
  };

  const handleShare = async (patient) => {
    const shareUrl = `${window.location.origin}/patient/${patient._id}`;
    const shareText = `Help ${patient.name} fight ${
      patient.disease
    }. ₹${patient.amountRaised.toLocaleString()} raised of ₹${patient.amountRequired.toLocaleString()} required.`;
    const shareTitle = `Support ${patient.name}'s Medical Fundraiser`;

    // Get the current image being displayed for this patient
    const currentImage =
      patient.thumbnailImages[currentImageIndexes[patient._id]];

    try {
      if (navigator.share) {
        // Check if the browser supports sharing files
        if (navigator.canShare && navigator.canShare({ files: [] })) {
          // Fetch the image and convert it to a file
          const response = await fetch(currentImage);
          const blob = await response.blob();
          const file = new File([blob], "patient-image.jpg", {
            type: "image/jpeg",
          });

          // Share with image
          await navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
            files: [file],
          });
        } else {
          await navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
          });
        }
      } else {
        await navigator.clipboard.writeText(
          `${shareTitle}\n\n${shareText}\n\n${shareUrl}`
        );
        setShowShareAlert(true);
        setTimeout(() => setShowShareAlert(false), 3000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const renderPatients = () => {
    return patients.slice(0, displayCount).map((patient) => {
      const progressPercentage = Math.min(
        (patient.amountRaised / patient.amountRequired) * 100,
        100
      );

      return (
        <div key={patient._id} className="patient-card">
          <div className="image-slider">
            <img
              src={patient.thumbnailImages[currentImageIndexes[patient._id]]}
              alt={patient.name}
              className="slider-image"
            />
            <button
              className="slider-btn prev"
              onClick={(e) => {
                e.preventDefault();
                prevImage(patient._id, patient.thumbnailImages.length);
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="slider-btn next"
              onClick={(e) => {
                e.preventDefault();
                nextImage(patient._id, patient.thumbnailImages.length);
              }}
            >
              <FaChevronRight />
            </button>
            <div className="days-left">
              <FaCalendarAlt className="calendar-icon" />
              <span>{patient.daysLeft} days left</span>
            </div>
          </div>

          <div className="patient-info">
            <div className="patient-header">
              <h3 className="patient-name">{patient.name}</h3>
              <button
                onClick={() => handleShare(patient)}
                className="share-button"
                aria-label="Share fundraiser"
              >
                <FaShare />
              </button>
            </div>
            <div className="condition">
              <FaHeart className="heart-icon" />
              <span>{patient.disease}</span>
            </div>
            <p className="description">
              <strong>"</strong>
              {patient.description}
            </p>

            <div className="funding-info">
              <div className="amount-info">
                <span className="raised">
                  ₹{patient.amountRaised.toLocaleString()}
                </span>
                <span className="total">
                  raised of ₹{patient.amountRequired.toLocaleString()}
                </span>
              </div>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <Link to={`/patient/${patient._id}`} className="donate-button">
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
    <section id="patients-section" className="patients-section">
      {showShareAlert && (
        <div className="share-alert">
          Fundraiser link copied to clipboard! You can now share it with others.
        </div>
      )}

      {patients.length > 0 && (
        <div className="container">
          <div className="section-heading">
            <h1>Active Fundraisers</h1>
          </div>

          <div className="patients-grid">{renderPatients()}</div>

          {displayCount < patients.length && (
            <button className="load-more-button" onClick={loadMorePatients}>
              Load More
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Patients;
