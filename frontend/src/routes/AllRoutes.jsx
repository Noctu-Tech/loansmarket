import { React } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import EMICalculator from "../pages/EMICalculator";
import ApplyForm from "../pages/ApplyForm";
import Footer from "../components/Footer";
import Aboutus from "../pages/Aboutus";
const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/About" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
          <Route path="/emi" element={<EMICalculator />} />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
      </Router>

      {/* <div className="w-screen h-2/3">
        <Footer />
      </div> */}
    </>
  );
};

export default AllRoutes;
