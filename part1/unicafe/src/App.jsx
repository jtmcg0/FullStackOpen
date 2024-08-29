import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const {good, neutral, bad, totalClicks} = props
    return(
      <div>
        <h2>Current Feedback Statistics:</h2>
        Good: {good} Neutral: {neutral} Bad: {bad}

        <h2>Average Rating from -1 to 1:</h2>
        {(good + (bad * -1)) / totalClicks}

        <h2>Percentage of positive feedback:</h2>
        {good / totalClicks * 100}%
      </div>
    )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClicks, setTotal] = useState(0)

  const handleGoodClick = () => {
    console.log('UpdatedGood')
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <h1>How was your experience?</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      &nbsp;
      <Button handleClick={handleNeutralClick} text='Neutral' />
      &nbsp;
      <Button handleClick={handleBadClick} text='Bad'/>
      
      <Statistics good = {good}
                  neutral = {neutral}
                  bad = {bad}
                  totalClicks = {totalClicks} />
    </div>
  )
}

export default App