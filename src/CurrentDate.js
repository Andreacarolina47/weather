import React from "react";

export default function CurrentDate(props){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
    let day = days[props.date.getDay()];
    let hour= props.date.getHours()% 12 || 12;
    if (hour < 10){hour=`0${hour}`};
    let minutes= props.date.getMinutes();
    if (minutes < 10){minutes=`0${minutes}`};
    let AmOrPm = props.date.getHours() >= 12 ? "pm" : "am";

    return <h2 className="date">{day}, {hour}:{minutes} {AmOrPm}</h2>;
}