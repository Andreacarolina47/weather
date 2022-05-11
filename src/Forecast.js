import React from "react";
import './App.css';

export default function Forecast(){
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