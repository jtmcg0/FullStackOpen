import { useState } from 'react'

const Person = ({person}) => {
  return (
    <div>
      {person.name}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: '1'
     }
  ]) 
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: String(persons.length + 1)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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