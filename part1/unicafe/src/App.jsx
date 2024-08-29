import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('UpdatedGood')
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>How was your experience?</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      &nbsp;
      <Button handleClick={handleNeutralClick} text='Neutral' />
      &nbsp;
      <Button handleClick={handleBadClick} text='Bad'/>
      
      <h2>Current Feedback Statistics:</h2>
      Good: {good} Neutral: {neutral} Bad: {bad}
    </div>
  )
}

export default App