import CountryWeather from "./Weather"
const CountryDetail = ({country}) => {

  
  return(
    <div>
      <h2>{country.name.common}</h2>
      Capital: {country.capital}
      <br />
      Area: {country.area} <br />
      LatLon: {country.latlng}
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([key, val]) =>
          <li key={key}>{val}</li>

        )}
      </ul>
        <h2>Flag:</h2>
        <br />
        <img src={country.flags.png} border="1"/>
        <CountryWeather country = {country}/>
    </div>
  )

}

export default CountryDetail