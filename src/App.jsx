import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./components/PageLayout";
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
            <Route path="/goshalas" element={<LazyHome />} />
            <Route path="/goshalas/:id" element={<LazyHome />} />
          </Routes>
        </PageLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
