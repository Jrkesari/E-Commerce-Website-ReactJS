import React, { useState } from 'react';
import './register.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
// import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login">
      <div className="main-agileits">
        <div className="form-w3agile form1">
          <h3>Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="key">
              <i className="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                value={formData.username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
                required
              />
              <div className="clearfix"></div>
            </div>
            <div className="key">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <div className="clearfix"></div>
            </div>
            <div className="key">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <div className="clearfix"></div>
            </div>
            <div className="key">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              <div className="clearfix"></div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
