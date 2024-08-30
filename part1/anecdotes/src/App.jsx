import { useState } from 'react'

const Button = ({handleClick, text}) => (

  <button onClick={handleClick}>{text}</button>
)


const MostVotes = ({anecdotes, votes}) => {

  const voteCount = Math.max(...votes)
  const mostVoted = votes.indexOf(voteCount)

  // Return "no votes" if highest count is 0
  if (voteCount === 0) {
    return(
      <div>
        <h3>No votes received yet</h3>
      </div>
    )
  }
  return(
    <div>
      <h3>Most Voted Anecdote ({voteCount} votes)</h3>
      {anecdotes[mostVoted]}
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // Initialize votes with array length of anecdotes set to all 0
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomSelect = () => {
    const newSelection = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelection)
  }

  const handleVote = () => {
    const votesCopy = [...votes]
    
    // Set empty value to 0 first
    if (votesCopy[selected] === '') {
      votesCopy[selected] = 0
    }
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  return (
    <div>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes.
      <p />
      <Button handleClick={handleVote} text='Vote +1' />
      &nbsp;
      <Button handleClick={randomSelect} text='New Anecdote' />
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App