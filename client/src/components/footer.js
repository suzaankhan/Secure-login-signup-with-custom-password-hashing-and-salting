import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sometext">
          <p>
            <h2>Know more about us!</h2><br />
            Welcome to our platform dedicated to buying, selling, renting, and donating items. Our mission is to provide a user-friendly and secure environment for you to connect 
            with others in your community. <br/><br/> Whether you're looking to find a new treasure, give back
             to the community, or simply declutter your space, you've come to the right place.
              Explore our diverse categories and start your journey today!
          </p>
        </div>
        <div className="links1">
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li><br />
            <li>
              <a href="#">Facebook</a>
            </li><br />
            <li>
              <a href="#">Twitter</a>
            </li><br />
          </ul>
        </div>
        <div className="links2">
          <ul>
            <li>
              <a href="#">Leo business</a>
            </li><br />
            <li>
              <a href="#">Our Partners</a>
            </li><br />
            <li>
              <a href="#">Get the App</a>
            </li><br />
          </ul>
        </div>
        <div className="links3">
          <ul>
            <li>
              <a href="#">Terms</a>
            </li><br />
            <li>
              <a href="#">Privacy Policy</a>
            </li><br />
            <li>
              <a href="#">Investors</a>
            </li><br />
          </ul>
        </div>
        </div>
    </>
  );
};

export default Footer;





