import React, { useState } from 'react';
import './CSS/loginsignup.css';

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "signup" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter Your Name' />}
          <label>
            Email:
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter Your Email' />
          </label>
          <label>
            Password:
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter Your Password' />
          </label>
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "signup" && <p className='loginsignup-login'>Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}
        {state === "Login" && <p className='loginsignup-login'>Want to create an account? <span onClick={() => { setState("signup") }}>Signup here</span></p>}
        <div className="loginsignup-agree">
          <label>
            <input type="checkbox" name="agree" />
            By continuing, I agree to the terms of use and privacy policy...
          </label>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
