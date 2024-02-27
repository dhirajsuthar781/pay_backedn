import React ,{useEffect ,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Quickloan from './Components/Loan/Quickloan';
import Login from './Components/ContactUs/Login';
import Signup from './Components/ContactUs/Signup';
import ApplyNow from './Components/Home/ApplyNow/ApplyNow.jsx';
import Step1 from './Components/Home/ApplyNow/Step1'
import Step2 from './Components/Home/ApplyNow/Step2'



function App() {

 
  useEffect(() => {
 

  }, [])

   

  
  return (
    <>

   
      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path="/"  >
            {/* <Route path='/' element={<Home />} /> */}
            <Route index exact element={<Home />} />
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='ApplyNow' element={<ApplyNow />}>
              <Route path='' element={<Step1 />} />
              <Route path='step2' element={<Step2 />} />

            </Route>


          </Route>

          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/contact' element={<ContactUs />} />

          <Route exact path='/Loan' element={<Quickloan />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
