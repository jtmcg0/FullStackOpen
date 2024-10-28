import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'
import Country from './components/Country'


const App = (props) => {
  const [countries, setCountries] = useState(null)
  const [searchFilter, setSearchFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState(null)


  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
        console.log(initialCountries)
      })
      .catch(error => {console.log(error)})
  }, [])

  
  const countriesToShow = searchFilter
    ? countries.filter(country =>
        country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : countries

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }


  //Don't render if list is null
  if (!countries) {return null}
  return (
    <>
    Find Countries:
    <input
      value = {searchFilter}
      onChange = {handleFilterChange}
    />

    <Countries countries={countriesToShow} />

    </>
  )
}

export default App
