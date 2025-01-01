import React, { useState, useEffect } from 'react';
import "./video.css";
import C1 from './c1.jpeg'
import C2 from './c2.jpeg'
import C3 from './c3.jpeg'
// import LoginPage from './login';
import { useNavigate } from 'react-router-dom';

const Video = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    C1,
    C2,
    C3
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the image index, looping back to the first image when reaching the end
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds (3000 milliseconds)

    return () => {
      // Clear the interval when the component unmounts to prevent memory leaks
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();
    const handleLoginPage = () => {
      navigate('/login'); // Navigate to the Contact page
    };

  return (
    <>
      <div className="video-text1">
        <div className="text">
          <h1><strong>Leo -</strong>Life and everything online</h1>
          <h4>BUY | SELL | RENT | DONATE</h4>
          <br />
          <h3>
          Your 4 problem solution at one page! <br></br>
          Unlock Opportunities: Buy It, Rent It, Sell It, or Share the Love
          </h3>
          <button onClick={handleLoginPage}>
            <strong>Get Started</strong>
          </button>
        </div>

        {/* <div id="root"></div> */}

        <img id='carous' src={images[imageIndex]} alt="Image" />

      </div>
    </>
  );
};

export default Video;
