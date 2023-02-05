import "./App.css";
import WeatherCondiotion from "./WeatherCondition";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [weatherData, setWeatherDate] = useState({});

  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function takeCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    
    setWeatherDate({
      city: response.data.city,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      temp: response.data.temperature.current,
      imageCondition: response.data.condition.icon_url,
      time: response.data.time,
    });
  }
  function search() {
    let apiKey = "0t0f733f3454c9aobbda64f6025e69d0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="Container">
          <div className="SearchEngine p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9 text">
                  <input
                    type="text"
                    placeholder="Type a city.."
                    className="textBox w-100"
                    onChange={takeCity}
                  ></input>
                </div>
                <div className="col-3">
                  <input
                    onClick={search}
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  ></input>
                </div>
              </div>
            </form>
          </div>

          <div className="display">
            <WeatherCondiotion data={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
}
