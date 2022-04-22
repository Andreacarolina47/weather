import './App.css';
import React, {useState} from "react";
import axios from "axios";

export default function App(){
  const [city, setCity]= useState(null);
  const [received, setReceived]= useState(false);

  function getCity(event){
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSearch(event){
    event.preventDefault();
  }

  let form = <form onSubmit={handleSearch}>
    <input type="search" placeholder='Enter the name of a place' onChange={getCity} />
    <input type="submit" value="Search"  />
  </form>

  if(received){
    return(
      <div>{form}
      </div>
    );} else{
      return(
        <div>{form}</div>
      )
    }
  }
