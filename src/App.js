import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Mexico');
        setUniversities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
       </head>

      <h1>Universities in Mexico</h1>
      <ul>
        {universities.map((university) => (
          <li key={university.name}>
            <strong>Name:</strong> {university.name}<br />
            <strong>Country:</strong> {university.country}<br />
            <strong>Website:</strong> <a href={university.web_pages[0]}>{university.web_pages[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


