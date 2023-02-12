import "./App.css";
import WeatherCondiotion from "./WeatherCondition";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  let [weatherData, setWeatherDate] = useState({});
  let date1 = "";
  let [city, setCity] = useState("");
  let latLon = "";

  let week = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function handleSubmit(event) {
    event.preventDefault();
  }
  function takeCity(event) {
    setCity(event.target.value);
  }

  function makeDate(date) {
    let newDate = new Date(date * 1000);
    let day = week[newDate.getDay()];
    let hours = newDate.getHours();
    let min = newDate.getMinutes();

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    date1 = `${day}  ${hours}:${min}`;
  }

  function handleResponse(response) {
    makeDate(response.data.time);

    setWeatherDate({
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude,
      city: response.data.city,
      time: date1.toString(),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      temp: response.data.temperature.current,
      imageCondition: response.data.condition.icon_url,
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
        <div className="Container mb-2">
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
          <div>
            <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
          </div>
        </div>
        <div className="dev">
          <span>This app was coded by Mitra Enayatollahi, </span>
          <a href="https://github.com/Mitra-rk/week_ch_4">
            You can find source code in my Github
          </a>
        </div>
      </div>
    </div>
  );
}
