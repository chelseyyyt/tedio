import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Values.css';

const Values = () => {
  const [values, setValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/values')
      .then(response => response.json())
      .then(data => {
        setValues(data);
      })
      .catch(error => {
        console.error('Error fetching values:', error);
        setValues([
          "Respect", "Honesty", "Responsibility", "Empathy", "Courage",
          "Perseverance", "Gratitude", "Curiosity", "Kindness", "Science and Technology",
          "Story time and Reading", "Arts and DIY Projects", "Historical Adventures", "Geography", "Cooking",
          "Exercise Tutorials", "Language Learning", "Nature and Wildlife", "Inspirational Stories", "Kids' Songs and Sing-alongs",
          "Phonics", "Vocabulary", "Stranger Danger", "Road Safety", "Dance-along",
          "Exploration", "Problem Solving", "Diversity", "Storytelling", "Recycling",
          "Ecosystems", "Biographies", "Family Activities", "Teamwork"
        ]);
      });
  }, []);

  const handleValueClick = (value) => {
    setSelectedValues(prevSelectedValues =>
      prevSelectedValues.includes(value)
        ? prevSelectedValues.filter(v => v !== value)
        : [...prevSelectedValues, value]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/selected-values', { values: selectedValues });
      console.log('Response:', response.data);
      
    } catch (error) {
      console.error('Error submitting values:', error);
    }
  };

  return (
    <div className="values-selection-container">
      <h1>Choose Your Values/Topics</h1>
      <p>Pick 5 or more</p>
      <div className="progress-indicator">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="values-grid">
        {values.map((value, index) => (
          <div
            key={index}
            className={`value-card ${selectedValues.includes(value) ? 'selected' : ''}`}
            onClick={() => handleValueClick(value)}
          >
            <img src={`/path/to/your/images/${value}.png`} alt={value} />
            <p>{value}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Values;
