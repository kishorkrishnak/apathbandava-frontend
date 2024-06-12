import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Admin = () => {
  const [name, setName] = useState("");
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [location, setLocation] = useState("");
  const [noOfCows, setNoOfCows] = useState(0);
  const [upiQrImage, setUpiQrImage] = useState("");
  const [upiMobileNumber, setUpiMobileNumber] = useState("");
  const [bankAccountHolder, setBankAccountHolder] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankIFSC, setBankIFSC] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");

  const addGaushala = async () => {
    const gaushalaData = {
      name,
      thumbnailImages,
      location,
      noOfCows,
      upiQrImage,
      upiMobileNumber,
      bankAccountHolder,
      bankBranch,
      bankIFSC,
      bankAccNo,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/gaushalas`,
        gaushalaData
      );
      console.log(response);
      if (response.data.status === "success") {
        toast.success("Gaushala added successfully");
      } else {
        toast.error("Failed to add Gaushala");
      }
    } catch (error) {
      toast.error("Failed to add Gaushala");
    }
  };

  return (
    <>
      <div className="container">
        <div className="gaushala-form gap-2 mt-3 d-flex flex-column justify-content-center align-items-center">
          <h2>Add a Gaushala</h2>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Gaushala Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="text"
                              id=""
                              cols="80"
                              rows="1"
                              placeholder="Description (Optional)"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Thumbnail Images (comma-separated URLs)"
                              value={thumbnailImages.join(",")}
                              onChange={(e) =>
                                setThumbnailImages(e.target.value.split(","))
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Number of Cows"
                              value={noOfCows}
                              onChange={(e) => setNoOfCows(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="UPI QR Image URL"
                              value={upiQrImage}
                              onChange={(e) => setUpiQrImage(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="UPI Mobile Number"
                              value={upiMobileNumber}
                              onChange={(e) =>
                                setUpiMobileNumber(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank Account Holder"
                              value={bankAccountHolder}
                              onChange={(e) =>
                                setBankAccountHolder(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank Branch"
                              value={bankBranch}
                              onChange={(e) => setBankBranch(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank IFSC"
                              value={bankIFSC}
                              onChange={(e) => setBankIFSC(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank Account Number"
                              value={bankAccNo}
                              onChange={(e) => setBankAccNo(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mb-5">
                          <a
                            href="#"
                            className="btn1"
                            onClick={addGaushala}
                          >
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
