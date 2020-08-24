
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 40,
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    paddingTop: 40
  },
  subtitle: {
    fontSize: 30,
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    paddingTop: 40
  },
  menu: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    paddingTop: 20
  },
  
  displayData: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    paddingTop: 10
  },

  space: {
    paddingTop: 30,
    fontSize: 20
  },
  tempIcon: {
    display: "flex",
    paddingTop: 30,
    justifyContent: "space-between", 
    alignItems: "center",
    fontSize: 20
  },
  card: {
    position: 'relative',
    width: '200px',
    justifyContent: "space-between", 
    alignItems: "center",
    display: "flex", 
  },
  selectMenu: {
    fontSize: 25,
    color: 'blue',
  }


}));

const api = {

}

export default function Weather() {
  const classes = useStyles();
  const [cityData, setCityData] = useState({});
  const [city, setCity] = useState('');


  useEffect(() => {
    Axios
      .get(`${api.base}/weather?q=${city}&units=imperial&APPID=${api.key}`)
      .then(res => {
        console.log(res)
        setCityData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[city])


    // async function fetchData() {
    //   const res = await fetch(`${api.base}/weather?q=${city}&units=metric&APPID=${api.key}`)
    //   const getResult = await res.json();
    //   setCityData(getResult);
    //   }

    // }, []);
  
  const today = new Date();

  // CONVERT TO FARENHEIT 
  // function convertToFarenheit(temp) {
  //   return(temp * (9.0 / 5.0) + 32).toFixed(0);
  // }

  
  const handleClick = (event) => {
    setCity(event.target.value);
  }; 

  console.log(cityData)
  return (
    <div>
      <h1 className={classes.title}>Weather App</h1>
      <h3 className={classes.subtitle}>Pick Location</h3>
      <div className={classes.menu}>
      <Select className={classes.selectMenu} value={city} onChange={handleClick}>       
        <MenuItem value={'San Francisco'}>San Francisco</MenuItem>
        <MenuItem value={'Daly City'}>Daly City</MenuItem>
        <MenuItem value={'Hawaii'}>Hawaii</MenuItem>
        <MenuItem value={'Sacramento'}>Sacramento</MenuItem>
        <MenuItem value={'Oakland'}>Oakland</MenuItem>
        <MenuItem value={'San Diego'}>San Diego</MenuItem>
        <MenuItem value={'Santa Barbara'}>Santa Barbara</MenuItem>
        <MenuItem value={'Portland'}>Portland</MenuItem>
        <MenuItem value={'Seattle'}>Seattle</MenuItem>     
      </Select>
      </div>
    
      {(typeof cityData.main != 'undefined') ? (
        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}
        >
        <Card>
        <CardContent>
        <div className={classes.displayData}>
        <div>
        <div className={classes.space}>{today.toLocaleDateString()}</div>
        <div className={classes.space}>{cityData.weather[0].main}</div>
        <div className={classes.tempIcon}>
        <div>{cityData.main.temp} {''} °F</div>
        <div>
          <img src= {`http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`} height="90" width="90" alt="weather icon"/>
          </div>
        </div>      
      </div>
      </div>
      </CardContent>
      </Card>
      </Grid>
      ) :('') }
   
  </div>
  
  );
}
  






