
import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


// const useStyles = makeStyles((theme) => ({
//   input: {
//     flex: 1,
//     width: 500,
//     height: 40,
//     fontSize: 15
//   },
//   iconButton: {
//     padding: 10,
//   },
//   weatherContainer: {
//     fontSize: 40,
//     paddingLeft: 440,
//   },
//   title: {
//     fontSize: 40,
//     paddingLeft: 500
//   },
//   weatherInfo: {
//     fontSize: 30,
//     paddingLeft:500,
//     paddingTop: 20
//   }
// }));

const api = {
  key: "5fc2cf4502bdb80a9a86054635dcb41c",
  base: "https://api.openweathermap.org/data/2.5"
}

export default function Weather() {
  // const classes = useStyles();
  const [city, setCity] = useState([]);
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${api.base}/weather?q=${city}&units=metric&APPID=${api.key}`)
      const getResult = await res.json();
      setCityData(getResult);
      }
      fetchData();
    }, []);


  const handleClick = (event) => {
    setCity(event.target.value);
  }; 

  
  console.log(cityData)
  return (
  <div>
      <h1>A Cool App</h1>
      <Select value={city} onChange={handleClick}>       
        <MenuItem value={'San Francisco'}>San Francisco</MenuItem>
        <MenuItem value={'Daly City'}>Daly City</MenuItem>
        <MenuItem value={'Hawaii'}>Hawaii</MenuItem>
      </Select> 

    {city}
   {/* {cityData.weather[0].main} */}
  </div>
  
  );
}
  




