import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import AddForm from './components/AddForm'


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('Failed to retrieve persons list')
      })
  }, [])
  console.log(`Rendering ${persons.length} persons from storage`)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Inside addName here')
    // Test if name exists
    const existingPerson = persons.filter((person) => person.name === newName)
    
    if (existingPerson.length > 0) {
      if (window.confirm(`${newName} already exists. Update the entry?`)){
        const updatedObject = {
          name: newName,
          number: newNumber
        }
        personService
          .update(existingPerson[0].id, updatedObject)
          .then(updatedPerson => {
            // Map non-matching id items into new array
            // Matching id gets the new updated person
            const newPersons = persons.map(person => 
              person.id !== updatedPerson.id ? person : updatedPerson
            )
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.log('Failed to update existing person')
          })
      }
    
    
    } else {
      // Add person if name doesn't exist
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log('Failed to add new person')
        })
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


  const deletePerson = ({name, id}) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)){
      personService
        .del(id)
        .then(response => {
          console.log(response)
          //Create updated list by filtering out the id passed for deletion
          const updatedList = persons.filter(person => person.id !== id)
          setPersons(updatedList)
        })
    }
  }

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
    addPerson,
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
      <Persons persons={personsToShow} deletePerson={deletePerson} />
      
    </div>
  )
}

export default App