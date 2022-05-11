import React from "react";
import axios from "axios";
import './App.css';

export default function Forecast(props){

    function searchForecast(response){
        
    }

let apiKey = "02cf53f923b1744f0dbdf803cfd893b1";
let latitude= props.coordinates.lat;
let longitude= props.coordinates.lon;
let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
axios.get(url).then(searchForecast);
    return(
        <div className="row">
            <div className="col forecastContainer" >
                <div className="forecast">Thu</div>
                <div className="forecast"><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon"/></div>
                <div className="forecast">
                    <span className="forecastTemp">27°</span>
                    <span className="forecastTemp">25°</span>
                </div>
            </div>
        </div>
    )
}