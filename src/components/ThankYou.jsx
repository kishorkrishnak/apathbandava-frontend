const handleDownloadCertificate = () => {
  const certificateUrl = "/path/to/static/pdf/certificate.pdf";
  const link = document.createElement("a");
  link.href = certificateUrl;
  link.setAttribute("download", "Donation_Certificate.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ThankYouMessage = ({ personName }) => (
  <div className="qr-wrapper">
    <div
      className="thank-you-animation"
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          color: "#303054",
          marginBottom: "15px",
        }}
      >
        Thank You for Your Donation! ❤️
      </h3>
      <p className="thankyou-text">
        Your contribution will make a real difference in {personName}
        's life.
      </p>
      <button
        className="btn1 mt-3"
        onClick={handleDownloadCertificate}
        style={{ margin: "20px auto" }}
      >
        Download Donation Certificate 📄
      </button>
    </div>
  </div>
);

export default ThankYouMessage;
