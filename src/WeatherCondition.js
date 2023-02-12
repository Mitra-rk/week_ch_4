import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Unit from "./Unit";

export default function WeatherCondiotion({ data }) {
  return (
    <div className="WeatherCondiotion">
      <div className="Current p-3">
        <div className="cityTime">
          <h1 id="city"> {data.city}</h1>
          <p id="day">
            Last updated at:
            <span className="m-2">{data.time}</span>
          </p>
          <p className="text-capitalize" id="condition ">
            {data.condition}
          </p>
        </div>
      </div>
      <div className="container m-3">
        <div className="row ">
          <div className="col-2">
            <img src={data.imageCondition} alt="icon"></img>
          </div>
          <div className="col-6">
            <Unit data={data.temp} />
          </div>
          <div className="col-4 pt-4">
            <ul>
              <li id="humid">Humidity: {data.humidity}%</li>
              <li id="wind">Wind: {data.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
