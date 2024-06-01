import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
