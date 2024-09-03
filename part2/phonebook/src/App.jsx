import { useState } from 'react'

const Person = ({person}) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  )
}

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-456-7890',
      id: '1'
     }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()
    // Test is name exists
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

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName} >
        <div>
          name: 
          <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
          number:
          <input
           value = {newNumber}
           onChange = {handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person =>
        <Person key={person.id} person={person} />
      )}
      
    </div>
  )
}

export default App