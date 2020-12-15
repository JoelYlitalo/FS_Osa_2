import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './components/form'
import Display from './components/display'





const App = () => {

  const [countries, setCountries] = useState([]) 

  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setNewSearch(event.target.value)
  }


 

  return (
    <div>
     
    <Form value={newSearch} handle={handleSearchChange} />

    <Display content={countries} search={newSearch} handle={handleSearchChange} />
      
    </div>
    
    
  )

}

export default App
