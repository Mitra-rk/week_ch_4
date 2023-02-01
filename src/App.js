import "./App.css";
import WeatherCondiotion from "./WeatherCondition";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [ready, setReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function takeCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "0t0f733f3454c9aobbda64f6025e69d0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function cityChanged() {}

  function handleResponse(response) {
    setReady(true);
    console.log(response.data);
  }

  if (ready) {
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
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                      onClick={cityChanged}
                    ></input>
                  </div>
                </div>
              </form>
            </div>

            <div className="display">
              <WeatherCondiotion />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
