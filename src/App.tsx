import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface University {
  name: string
  country: string
  web_pages: string[]
}

const App: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([])
  useEffect(() => {
    axios
      .get('http://universities.hipolabs.com/search?country=Mexico')
      .then(response => {
        setUniversities(response.data)
        return response.data
      })
      .catch(error => {
        console.log('Error fetching universities:', error)
      })
  }, [])

  return (
    <div>
      <h1>Universidades en Mexico</h1>
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
    </div>
  )
}

export default App
