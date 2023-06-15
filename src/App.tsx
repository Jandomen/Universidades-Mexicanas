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
  const { data: universities, error } = useSWR<University[]>(
    'http://universities.hipolabs.com/search?country=Mexico',
    fetcher
  );

  if (error) {
    console.log('Error fetching universities:', error);
  }

  return (
    <div>
      <h1>Universidades en México</h1>
      {!universities ? (
        <h3>Loading...</h3>
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
