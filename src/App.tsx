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
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          'http://universities.hipolabs.com/search?country=Mexico'
        )
        setUniversities(response.data)
      } catch (error) {
        console.log('Error fetching universities:', error)
      }
    }
    void fetchData()
  }, [])

  return (
    <div>
      <h1>Universidades en Mexico</h1>
      <ul>
        {universities.map((university) => (
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
