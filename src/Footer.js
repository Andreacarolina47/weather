import React from "react";
import './App.css';

export default function Footer(){
    return(
        <footer className="footer">
      This project was coded by:{" "}
      <a href= "https://happy-sammet-7f040f.netlify.app/" target="_blank"
        rel="noreferrer"
        >Andrea Gómez</a>{" "}
        Open-sourced on{" "}
      <a
        href="https://github.com/Andreacarolina47/weather"
        target="_blank"
        rel="noreferrer"
        
      >
        GitHub </a
      > 
    </footer>
    )
}