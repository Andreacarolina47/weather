import React from "react";

export default function ForecastDay(props){
    function maxTemp(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`}

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`}

    function day(){
    let date= new Date(props.data.dt*1000);
    let day= date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[day];
    }

    return (
        <div>
            <div className="forecast">{day()}</div>
                <div className="forecast"></div>
                <div className="forecast">
                    <span className="forecastTemp">{maxTemp()}</span>
                    <span className="forecastTemp">{minTemp()}</span>
                </div>
        </div>
    )
}