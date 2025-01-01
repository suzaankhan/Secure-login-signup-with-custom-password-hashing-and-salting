import React from "react";
import MyLogo from './leologo.png';
import './aboutus.css';

function Aboutus(){
    return(
    <>
    <div className="about">
    <div className="about-us">
      <h1 className="ah">About Us</h1>
      <h3 className='t'>
        Welcome to our website! We are a team of passionate individuals dedicated to providing quality products/services.
      </h3>
      <div className="abt"> <br /> <br />
        <h3 className='h'>Behind the Success</h3>
        <p id='pr'>This is our website LEO which is a E-Commerce website. In our website, one can Buy, Sell, Rent and Donate. <br /> We check and authorize the product whixh is being Sold, Buy, Rent or Donated. <br />
        Donated product from our customers is donated to Government recognized NGO's amd Trusts.
         </p>
         
      </div>
      <img id='myimg' src={MyLogo} alt="LEO"/>

    </div>
    </div>
    </>
    )
}
export default Aboutus