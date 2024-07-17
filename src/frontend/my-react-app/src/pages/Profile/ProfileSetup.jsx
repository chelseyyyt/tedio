import React, { useState } from 'react';
import axios from 'axios';
import './ProfileSetup.css'; // Add your CSS file for styling

const ProfileSetup = () => {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/age')
      .then(response => response.json())
      .then(data => {
        setAge(data.age || ''); // If age is null or undefined, set it to an empty string
      })
      .catch(error => {
        console.error('Error fetching age:', error);
      });
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/age', { age });
      setMessage('Profile created successfully!');
      console.log('Response:', response.data);
      // Handle the response as needed
    } catch (error) {
      setMessage('Error submitting age. Please try again.');
      console.error('Error submitting age:', error);
    }
  };

  return (
    <div className="profile-setup-container">
      <div className="profile-setup">
        <h2>Let's set up a profile for your child</h2>
        <div className="progress-indicator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <h3>Age</h3>
            <p>To ensure age-appropriate content and comply with safety regulations.</p>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="How old is your child?"
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileSetup;
