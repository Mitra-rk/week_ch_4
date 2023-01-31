import "./App.css";
import WeatherCondiotion from "./WeatherCondition";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

export default function App() {
  let [city, setCity] = useState("Paris");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function takeCity(event) {
    setCity(event.target.value);
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
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
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
}
