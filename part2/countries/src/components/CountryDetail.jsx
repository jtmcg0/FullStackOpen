const CountryDetail = ({country}) => {

  return(
    <div>
      <h2>{country.name.common}</h2>
      Capital: {country.capital}
      <br />
      Area: {country.area}
      
      <h2>Languages</h2>
      <ul>
        {console.log(country.languages)}

        {Object.entries(country.languages).map(([key, val]) =>
          <li key={key}>{val}</li>

        )}
      </ul>
        <h2>Flag:</h2>
        <br />
        <img src={country.flags.png} border="1"/>

    </div>
  )

}

export default CountryDetail