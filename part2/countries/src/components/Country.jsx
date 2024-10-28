const Country = ({country, setSearchCountry}) => {
  
  return(
    <li>
      {country}
      <button onClick={() => setSearchCountry(country)}>show</button>
    </li>
  )

}

export default Country
