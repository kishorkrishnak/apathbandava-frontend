import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";

const LazyHome = React.lazy(() => import("./pages/Home"));

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Toaster />
        <PageLayout>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/patients" element={<LazyHome />} />
          </Routes>
        </PageLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
