import './App.css';
import React, {useState} from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature"
import Forecast from "./Forecast";

export default function App(props){
  const [city, setCity]= useState(props.defaultCity);
  const [received, setReceived]= useState(false);
  const [weather, setWeather]= useState(null);

  function getCity(event){
    event.preventDefault();
    setCity(event.target.value);
  }

  function getData(response){
    setReceived(true);
   setWeather({
     city: response.data.name,
     temperature: Math.round(response.data.main.temp),
     description: response.data.weather[0].description,
     humidity: response.data.main.humidity,
     wind: response.data.wind.speed,
     date: new Date(response.data.dt*1000),
     coordinates: response.data.coord,
     icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`  
   });
  }

  function handleSearch(event){
    event.preventDefault();
    let apiKey = "02cf53f923b1744f0dbdf803cfd893b1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getData);
  }

  let form = <form onSubmit={handleSearch} className="form">
    <input type="search" placeholder='Enter the name of a place' autoFocus="on" className=" searchBar" onChange={getCity} />
    <input type="submit" value="Search" className="searchButton" />
    <input type="submit" value="Current" className="searchButton" />
  </form>

  if(received){
    return(
      <div className="App">
        <h1>{weather.city}</h1>
        {form}
        <CurrentDate date={weather.date}/>
      
      <Temperature Temp={weather.temperature} Icon={weather.icon}/>
      
      <div className="container">
      <div className="row temperatureInfo">
      <div className="col">{weather.description}</div>
      <div className="col">Humidity: {weather.humidity}%</div>
      <div className="col">Wind: {weather.wind}km/h</div>
      </div>
      </div>
      <Forecast latitude={weather.coordinates.lat} longitude={weather.coordinates.lon} />
      </div>
    );} else{
    let apiKey = "02cf53f923b1744f0dbdf803cfd893b1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getData);
    return ("Loading...")
    }
  }
  
  