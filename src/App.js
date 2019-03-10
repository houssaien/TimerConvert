import React, { Component } from 'react';
import './App.css'; 
import './hour.css';


class App extends Component {
  
  render() {
     const milliseconds = 500000;

const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);


    return (
      <div className="App">
     

      <div class="flex-container">
  <div className="title"> {hours}</div>
 
  <div className="title"> {minutes}</div>
  
  <div className="title">   {seconds}</div>  
</div>
<div class="flex-container">
  <div className="text"> <p>Hour</p></div>
  <div className="text"> <p>Minute</p></div>
  <div className="text">  <p> Second</p></div>  
</div>
      
      
  
      </div>
    );
  }
}

export default App;
