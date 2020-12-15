import React, { useState, useEffect } from 'react'
import AllPersons from './components/Persons'
import Filter from './components/filter'
import PersonForm from './components/form'
import personService from './services/persons'
import Notification from './components/notification'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('') 
  const [ newName, setNewName ] = useState('')
  const [newfilter, setNewfilter] = useState('')
  const [errMsg, setErrMsg] = useState(null)
  const [color, setColor] = useState(true)

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const object = {
      name:newName,
      number: newNumber
    }

    

    if(persons.map(n => n.name).includes(newName)) {
      const id = Number(persons.find(m=>m.name === newName).id)
      if(window.confirm(`${newName} is already in the phonebook. Replace the old number?`)) {
        personService
        .update(id, object)
        .then(res => {
          
          setPersons(persons.map(p => p.id !== id ? p : res))
          setNewName('')
          setNewNumber('')
          setErrMsg(
          `${res.name}'s number was updated`
           )
           setTimeout(() => {
           setErrMsg(null)
        }, 5000)
        })
        .catch(error => {
          setColor(false)
          setErrMsg(
          `${newName} was already removed from server`
          )
          setPersons(persons.filter(p => p.name !== newName))
            setTimeout(() => {
            setErrMsg(null)
            setColor(true)
        }, 5000)
            setNewName('')
            setNewNumber('')
        })
      } else {
        setNewName('')
        setNewNumber('')
      }
    } else {
      personService
        .create(object)
        .then(res => {
          setPersons(persons.concat(res))
          setNewName('')
          setNewNumber('')
          setErrMsg(
          `${res.name} was added to the list`
        )
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
    })
    }
  }

  const removeName = (event) => {
    const id = Number(event.target.value)
    const name = persons.find(m => m.id === id).name
    if(window.confirm(`delete ${name} ?`)) {
      personService
      .remove(id)
      .then(res => {
        setPersons(persons.filter(p => p.id !== id))
        setErrMsg(
          `${name} was removed from server`
        )
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
    })
    }
  }



  const handlenameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlenumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewfilter(event.target.value)
  }


  const filteredSet = persons.filter(p => p.name.includes(newfilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errMsg} color = {color}/>
      <Filter value={newfilter} func={handleFilter} />
      
      <PersonForm 
      addName = {addName}
      newName = {newName}
      handlenameChange = {handlenameChange}
      newNumber = {newNumber}
      handlenumberChange = {handlenumberChange}

      />
      <h2>Numbers</h2>
      <AllPersons set={filteredSet} buttonFunction={removeName} />
    </div>
  )

}

export default App
