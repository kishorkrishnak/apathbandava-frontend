import About from "../../components/About";
import Hero from "../../components/Hero";
import Patients from "../../components/Patients";
import RequestCallback from "../../components/RequestCallback";
import WhatWeOffer from "../../components/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Patients />
      <WhatWeOffer />
      <RequestCallback />
    </>
  );
};

export default Home;
