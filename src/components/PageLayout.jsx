import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <main className="App">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
