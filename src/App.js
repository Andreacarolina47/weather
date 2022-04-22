import './App.css';
import React, {useState} from "react";
import axios from "axios";

function App() {
const [temperature, setTemperature]= useState(null);  

function showTemperature(response){
setTemperature(response.data.main.Temp);
}

  let url= `https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=02cf53f923b1744f0dbdf803cfd893b1&units=metric`
  axios.get(url).then(showTemperature)

  return (
    <div className="App">
      <h1>Hello App</h1>
      <h2>The temperature in Lisbon is {temperature}</h2>
    </div>
  );
}

export default App;
