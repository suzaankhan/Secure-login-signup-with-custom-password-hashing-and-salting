import React, { useState } from 'react';
import './navbar.css';
import Mylogo from './leologo.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
      navigate('/login'); // Navigate to the Contact page
    };

    const handleSignupButtonClick = () => {
        navigate('/register'); // Navigate to the Contact page
    };

    //send user to login if anybutton is clicked

    return (
        <>
            <nav className='main-nav'>
                {/* 1st logo/name part */}
                <div className="logo">
                    {/* <h2>GyanChakra</h2> */}
                    <img id='logo' src={Mylogo} alt="Leo" />
                </div>

                {/* 2nd menu part */}
                <div className="menu-link">
                    <ul>
                        <li><a style={{textDecoration: 'none'}} href='/home'><strong>Home</strong></a></li>
                        <li><a style={{textDecoration: 'none'}} href='/about'><strong>About</strong></a></li>
                        <li><a style={{textDecoration: 'none'}} href='/services'><strong>Services</strong></a></li>
                        <li><a style={{textDecoration: 'none'}} href='/contactus'><strong>Contact us</strong></a></li>
                    </ul>
                </div>

                <div className="login-signup">
                    <button className='signup' onClick={handleSignupButtonClick}>Sign up</button>
                    <button className='login' onClick={handleLoginButtonClick}>Login</button>
                </div>
            </nav>

        </>
    )
}

export default NavBar;