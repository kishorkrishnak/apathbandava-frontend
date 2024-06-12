import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./components/PageLayout";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAdmin = React.lazy(() => import("./pages/Admin"));

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
            <Route path="/admin" element={<LazyAdmin />} />
          </Routes>
        </PageLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
