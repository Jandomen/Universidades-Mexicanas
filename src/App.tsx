import React from 'react';
import './App.css';
import useSWR from 'swr';
import axios from 'axios';

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const fetcher = (url: string) => axios.get(url).then(response => response.data);

const App: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL || '';
  const { data: universities, error } = useSWR<University[]>(apiUrl, fetcher);

  if (error) {
    console.log('Error fetching universities:', error);
  }

  return (
    <div>
      <h1>Universidades en México</h1>
      {!universities ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {universities.map(university => (
            <li key={university.name}>
              <h2>{university.name}</h2>
              <p>Country: {university.country}</p>
              <p>
                Website:{' '}
                <a href={university.web_pages[0]}>{university.web_pages[0]}</a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

