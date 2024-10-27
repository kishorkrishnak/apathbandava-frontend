import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyPatient = React.lazy(() => import("./pages/Patient"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Toaster />
        <PageLayout>
          <Suspense>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/patient/:id" element={<LazyPatient />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
