import React,{useState} from 'react';
import './login.css'; // Import the CSS file for styling.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {

  const [formData, setFormData] = useState({
    email: '', password: ''
  })
  const [msg, setMsg] = useState('');

  const handleChange = (e) =>{
    setMsg('');
    setFormData({
      ...formData, [e.target.name] : e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleReset = () =>{
    setFormData({
      email: '', password: ''
    });
  }

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/performLogin', formData);
      if(response.data.message == 0){
        setMsg('No such user exists!');
        // handleReset();
      }
      else if(response.data.message == 1){
        setMsg('');
        window.alert('Loggin Successfull!');
        navigate('/home');
      }
      else if(response.data.message == 2){
        setMsg('Invalid Credentials');
        console.log(response.data.message);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{props.type}</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            {/* <label htmlFor="username">Username</label> */}
            <br />
            <input type="email" id="username" name="email" placeholder="Enter your email..." required
            onChange={handleChange} value={formData.email} />
            <br />
          </div>
          <div className="input-container">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" name="password" placeholder="Enter your password..." 
            onChange={handleChange} value={formData.passwordl} required/>
          </div>
          <div className="go-to-register">
            <a href="/register">New here? Create an account</a>
          </div>
          <div className="msg">
            <p className='msg-text'>{msg}</p>
          </div>
          <button type="submit" >Submit</button> <br />
          {/* <button className='r-btn' onClick={handleReset}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
