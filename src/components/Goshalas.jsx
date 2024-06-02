import kapila from "../assets/kapila.jpg";
import { uid } from "react-uid";
import Pagination from "./Pagination/Pagination";

const Goshalas = () => {
  const goshalas = [1, 2, 3, 4, 5, 6, 8,9,10,11,12,14,144,1515,15,15];

  const renderGoshalas = (currentItems) => {
    return currentItems?.map((goshala) => (
      <div key={uid(goshala)} className="col-lg-4">
        <div className="don-box">
          <img src={kapila} alt="img"></img>
          <h3>Kapila Park Goshala</h3>
          <p>Location: Kenjar HC, Karnataka</p>
          <a href="#contact" className="btn1">
            Donate Now
          </a>
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
