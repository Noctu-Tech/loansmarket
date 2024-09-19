import {React} from 'react';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import EMICalculator from '../pages/EMICalculator';
import ApplyForm from '../pages/ApplyForm';
const AllRoutes = () => {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path ="/emi" element={<EMICalculator/>}/>
            <Route path="/apply" element={<ApplyForm/>} />
        </Routes>
    </Router>
  )
}

export default AllRoutes