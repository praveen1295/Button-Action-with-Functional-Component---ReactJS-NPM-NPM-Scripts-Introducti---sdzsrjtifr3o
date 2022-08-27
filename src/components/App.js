import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
        {para ? (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>) :null} 
    <button id="click" onClick ={(()=>setPara(true))}>Click Me!</button>
    </div>
  );
}


export default App;
