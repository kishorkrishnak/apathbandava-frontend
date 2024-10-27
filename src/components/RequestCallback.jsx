import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import './RequestCallback.css';
import WhatsappChat from "./WhatsappChat";

const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/message`,
        formData
      );
      if (response.data.status === "success") {
        toast.success("Your message has been submitted!");
        setFormData({
          name: "",
          phone: "",
          amount: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="heading">
          <h1>Request a Call Back</h1>
          <p>
            Fill this form, to get in touch with us regarding starting a{" "}
            <span>Fundraiser</span> or <span>any other queries.</span>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone No."
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        placeholder="Estimated Amount ₹ Required (Rupees)"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="1"
                        placeholder="Why do you need the fund?"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mt-2">
                  <button type="submit" className="btn1">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <WhatsappChat />
    </section>
  );
};

export default RequestCallback;
