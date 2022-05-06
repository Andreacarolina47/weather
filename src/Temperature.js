import React, {useState} from "react";

export default function Temperature(props){
  const [unit, setUnit]= useState("celsius");
  
  function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

  let fahrenheit= Math.round(props.Temp * 9/5 + 32)

  if (unit === "celsius"){
  return(
    <div>
    <span> <img src={props.Icon} alt="Weather Icon" className="currentWeatherIcon"/> </span>    
    <span className="currentTemp">{props.Temp}</span>
    <span className="units">°C | <a href="/" onClick={showFahrenheit}> °F</a> </span>
    </div>);}
    else{
        return(
            <div>
            <span> <img src={props.Icon} alt="Weather Icon" className="currentWeatherIcon"/> </span>    
            <span className="currentTemp">{fahrenheit}</span>
            <span className="units"> <a href="/" onClick={showCelsius}>°C </a> | °F</span>
            </div>);
    }
}