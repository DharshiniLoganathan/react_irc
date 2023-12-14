import React, { useState } from 'react';
import './styles.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    time: '',
    date: '',
    number: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="main-bg">
      <div className="form">
        <div className="form-text">
          <h1>
            <span>
              <img src="art-1.png" alt="" />
            </span>
            <center>Book Now{' '}</center>
            <span>
              <img src="art-1.png" alt="" />
            </span>
          </h1>
          
        </div>
        <div className="main-form">
          <form onSubmit={handleSubmit}>
            <div>
              <span>Your full name?</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>Your email address?</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Write your email here..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>How many people?</span>
              <select
                name="people"
                id="people"
                value={formData.people}
                onChange={handleChange}
                required
              >
                <option value="">People</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
            <div>
              <span>What time?</span>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>What is the date?</span>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>Your phone number?</span>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Write your number here..."
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div id="submit">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;