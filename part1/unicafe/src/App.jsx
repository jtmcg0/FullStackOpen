import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  const {text, value} = props
  
  return (
    <tr><td>{text}:</td> <td>{value}</td></tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, totalClicks} = props

    // Return "No Feedback" if no clicks
    if (totalClicks === 0) {
      return (
        <div>
          <h3>Current Feedback Statistics</h3>
          We haven't received any feedback.
        </div>
      )
    }

    return(
      <div>
        <h3>Current Feedback Statistics:</h3>
          <table>
            <tbody>
              <StatisticLine text='Good' value={good} />
              <StatisticLine text='Neutral' value={neutral} />
              <StatisticLine text='Bad' value={bad} /> 
              <StatisticLine text='Total' value={totalClicks} />
              <StatisticLine text='Average' value={(good + (bad * -1)) / totalClicks} />
              <StatisticLine text='Percentage Good' value={(good / totalClicks * 100) + "%"} />
              
            </tbody>
          </table>
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