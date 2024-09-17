import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import AddForm from './components/AddForm'


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  useEffect (() => {
    console.log('Effect execution')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    console.log('Inside addName here')
    // Test if name exists
    const inBook = persons.filter((person) => person.name === newName)
    if (inBook.length > 0) {
      alert(`${newName} is already in the phone book!`)
    } else {
      // Add person if name doesn't exist
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  //If search filter is defined, use it to filter array for output
  const personsToShow = searchFilter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : persons //Return full list if no filter set

    console.log("Filtered persons:", personsToShow)
    console.log("Current search filter:", searchFilter) 


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }

  const formData = {
    addName,
    handleNameChange,
    handleNumberChange,
    newName,
    newNumber
  }
 

  return (
    <div>
      <h2>Phonebook</h2>
      
        Filter: 
        <input
          value = {searchFilter}
          onChange = {handleFilterChange}
        />

      <h2>Add New Entry</h2>
      <AddForm {...formData}/>


      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
      
    </div>
  )
}

export default App