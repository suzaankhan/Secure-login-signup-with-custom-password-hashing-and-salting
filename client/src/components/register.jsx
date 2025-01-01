import React, { useState } from 'react';
import './register.css'; // Import the CSS file for styling.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username : '', email: '', password: '', password_again: ''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value, // Updates the corresponding field in the state
        });
      };
    
    const handleReset = () =>{
      setFormData({
        username : '', email: '', password: '', password_again: ''
      });
    }
    
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
    
        try {
            if(formData.password !== formData.password_again){
                window.alert("passwords do not match");
            }
            else{
                const response = await axios.post('http://localhost:5000/performRegistration', formData);
                console.log('Response from server:', response.data);
                if(response.data){
                    window.alert('Registration was succesfull');
                    navigate('/services');
                }
            }
        } catch (error) {
          console.error('Error:', error);
          window.alert("Some error occurred, please try again");
        }
      };

  return (
    <div className="login-container">

      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="input-container">
            <br />
            <input type="text" id="username" name="username" placeholder="What should we call you?" 
            required onChange={handleChange} value={formData.username} autoComplete='off'/>
          </div>
          <div className="input-container">
            <input type="email" id="email" name="email" placeholder="Enter your email..." 
            required onChange={handleChange} value={formData.email} autoComplete='off'/>
            <br />
          </div>
          <div className="input-container">
            <input type="password" id="pass1" name="password" placeholder="Enter your password..." 
            required onChange={handleChange} value={formData.password} autoComplete='off'/>
          </div>
          <div className="input-container">
            <input type="password" name="password_again" id="pass2" placeholder='Re-Enter your password...' 
            required onChange={handleChange} value={formData.password_again} autoComplete='off'/>
          </div>
          <div className="login-here">
            <a href="/login">Or Login here</a>
          </div>
          <button type="submit" >Register</button>
          <button className='reg-r-btn' onClick={handleReset}>Reset</button>
        </form>
      </div>

    </div>
  );
};

export default RegisterPage;
