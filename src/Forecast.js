import React, {useState} from "react";
import axios from "axios";
import './App.css';
import ForecastDay from "./ForecastDay";

export default function Forecast(props){
    const [loaded, setLoaded]= useState(false);
    const [forecastData, setForecastData]= useState(null);
    const [icon, setIcon]= useState(null);

    function searchForecast(response){
        setLoaded(true);
        setForecastData(response.data.daily)
        setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)      
    }

if (loaded){
    return(
        <div className="row">
            <div className="col forecastContainer" >
                <ForecastDay data={forecastData[0]} icon={icon}/>
            </div>
        </div>
    )
} else{   
let apiKey = "02cf53f923b1744f0dbdf803cfd893b1";
let latitude= props.coordinates.lat;
let longitude= props.coordinates.lon;
let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
axios.get(url).then(searchForecast);

return null }
    
}