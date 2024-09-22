import { React } from "react";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import EMICalculator from '../pages/EMICalculator';
import ApplyForm from '../pages/ApplyForm';
import ServicesPage from '../pages/ServicesPage';
const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path ="/emi" element={<EMICalculator/>}/>
            <Route path="/apply" element={<ApplyForm/>} />
            <Route path="/services" element={
          <ServicesPage/>
            } />
        </Routes>
      </Router>

      {/* <div className="w-screen h-2/3">
        <Footer />
      </div> */}
    </>
  );
};

export default AllRoutes;
