import React, { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoginForm = () => {
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <div className="main-agileits">
        <div className="form-w3agile">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="key">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => { if (email === 'Email') setEmail(''); }}
                onBlur={() => { if (email === '') setEmail('Email'); }}
                required
              />
              <div className="clearfix"></div>
            </div>
            <div className="key">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => { if (password === 'Password') setPassword(''); }}
                onBlur={() => { if (password === '') setPassword('Password'); }}
                required
              />
              <div className="clearfix"></div>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
        <div className="forg">
          <Link to="#" className="forg-left">Forgot Password</Link>
          <Link to="/register" className="forg-right">Register</Link>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
