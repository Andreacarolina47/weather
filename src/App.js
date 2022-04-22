import './App.css';
import React, {useState} from "react";
import axios from "axios";

function App() {
const [temperature, setTemperature]= useState(null); 
const [received, setReceived]= useState(false); 

function showTemperature(response){
setReceived(true);
setTemperature(Math.round(response.data.main.temp));
}

  let url= `https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=02cf53f923b1744f0dbdf803cfd893b1&units=metric`
  axios.get(url).then(showTemperature)
  if (received){
  return (
    <div className="App">
      <h1>Hello App</h1>
      <h2>The temperature in Lisbon is {temperature}°C</h2>
    </div>
  );} else{
    return(<h1>Hello App</h1>)
  }
}

export default App;
