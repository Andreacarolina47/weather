import React, {useState, useEffect, useLayoutEffect} from "react";
import axios from "axios";
import './App.css';
import ForecastDay from "./ForecastDay";


export default function Forecast(props){
    const [loaded, setLoaded]= useState(false);
    const [forecastData, setForecastData]= useState(null);
    
    useEffect(() => {
        setLoaded(false);
    },[props.latitude, props.longitude]);

    function searchForecast(response){
        setLoaded(true);
        setForecastData(response.data.daily);    
    }

if (loaded){
    
    return(
        <div className="row">
            {forecastData.map(function(dailyForecast, index){
                if (index < 5){ return (
                <div className="col forecastContainer" key={index} >
                <ForecastDay data={dailyForecast}/>
                </div>);} else {return null;}
            })}
            
        </div>
    )
} else{   
let apiKey = "02cf53f923b1744f0dbdf803cfd893b1";
let latitude= props.latitude;
let longitude= props.longitude;
let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
axios.get(url).then(searchForecast);

return null }
    
}