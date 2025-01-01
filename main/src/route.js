
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import ContactUs from "./components/contactus";
import Services from "./components/services";
// import Aboutus from "./components/aboutus";

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage type='Login' btn='Submit'/>} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/services' element={<Services />} />
                {/* <Route path='/about' element={<Aboutus />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;