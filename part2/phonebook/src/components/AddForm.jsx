const AddForm = ({addPerson,  
                  handleNameChange,
                  handleNumberChange,
                  newName,
                  newNumber} = FormData) => {

  return(
    <form onSubmit = {addPerson} >
    <div>
      Name: 
      <input value = {newName} onChange = {handleNameChange} />
    </div>
    <div>
      Number:
      <input value = {newNumber} onChange = {handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
    </form>
  )

}

export default AddForm