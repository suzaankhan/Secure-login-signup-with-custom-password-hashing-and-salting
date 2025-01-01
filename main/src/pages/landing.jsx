import React from "react";
import NavBar from "../components/navbar";
import Video from "../components/video";
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const LandingPage = () =>{
    return(
        <>
        <Helmet>
            <title>www.leo.com</title>
        </Helmet>
            <NavBar />
            <Video />
            <Footer />
        </>
    );
}

export default LandingPage;