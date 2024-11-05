import axios from 'axios'
import { useEffect, useState } from 'react'


const CountryWeather = ({country}) => {
  
  const weatherURL = 'https://api.openweathermap.org/data/3.0/onecall?'
  const api_key = import.meta.env.VITE_KEY_OPENWEATHERMAP
  const [countryLat, countryLng] = country.latlng
  
  const excludes = "minutely,hourly,daily,alerts"
  const fullURL = `${weatherURL}lat=${countryLat}&lon=${countryLng}&units=metric&appid=${api_key}&exclude=${excludes}`
  
  const [currentWeather, setCurrentWeather] = useState(null)
  
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(fullURL);
        setCurrentWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getWeather();
  }, []);
  
  // Check if weather has loaded before rendering
  if (!currentWeather) {
    return ("<p>Checking local weather...</p>")
  }

  // Build and render weather output
  const weatherIcon = `http://openweathermap.org/img/w/${currentWeather.current.weather[0].icon}.png`
  console.log(weatherIcon)
  
  return (
    <div>
      <p>
        <b>Weather now in {country.capital}:</b>
      </p>
      <p>
        Temperature: {currentWeather.current.temp} C
        <br />
        Feels like: {currentWeather.current.feels_like} C
      </p>
      <img src = {weatherIcon} height="120" width="120" alt = "Weather Icon"/>
      <p>
        {currentWeather.current.weather[0].description}
        <br />
        Wind speed: {currentWeather.current.wind_speed} m/s
      </p>
    </div>
  )

}

export default CountryWeather
