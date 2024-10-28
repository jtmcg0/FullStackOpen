import Country from './Country'
import CountryDetail from './CountryDetail'

const Countries = ({countries}) => {

  //Warn if more than 10 matches
  if (countries.length > 10){
    return (<p>More than 10 matches. Please refine your search.</p>)
  }

  //Show details of single country
  if(countries.length === 1){
    return(
      <CountryDetail
        country = {countries[0]}
      />
    )
  }

  //Show list of 2-10 countries
  return(
    <ul>
    {countries.map(country =>
      <Country
        key={country.name.official}
        country={country.name.common}
        type='list'
      />
    )}
    </ul>
  )

}

export default Countries