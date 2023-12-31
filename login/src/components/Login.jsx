import React from 'react';
import './Login.css'; // Assuming the stylesheet is in the same directory

const Login = () => {
  return (
    <div className="wrapper">
      <div className="title">
        Login Form
      </div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        
      </form>
    </div>
  );
};

export default Login;