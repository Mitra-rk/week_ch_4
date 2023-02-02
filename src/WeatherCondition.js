import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Unit from "./Unit";


export default function WeatherCondiotion(props) {
  let [ready, setReady] = useState(false);
  
  
  function search() {
   
  }
  if (ready) {
    return (
      <div className="WeatherCondiotion">
        <div className="Current p-3">
          <div className="cityTime">
            <h1 id="city">New York</h1>
            <p id="day">Last updated at:</p>
            <p id="condition">Mostly Cloudy</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src="" alt="icon"></img>
              </div>
              <div className="col-5">
                <Unit />
              </div>
              <div className="col-5">
                <ul>
                  <li id="humid">Humidity: %</li>
                  <li id="wind">Wind: Km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
