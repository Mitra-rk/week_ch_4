import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [send, setSend] = useState({});
  let forecastDay = "";

  console.log(props.lat);

  useEffect(() => {
    search();
  }, [props.lat]);

  function handleResponse(response) {
    forecastDay = response.data.daily;
    setSend({
      zero: forecastDay[0],
      one: forecastDay[1],
      two: forecastDay[2],
      three: forecastDay[3],
      four: forecastDay[4],
    });
  }
  function search() {
    if (props.lat && props.lon) {
      setLoaded(true);
      let apiKey = "0t0f733f3454c9aobbda64f6025e69d0";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.lon}&lat=${props.lat}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <Forecast data={send.zero} />
          <Forecast data={send.one} />
          <Forecast data={send.two} />
          <Forecast data={send.three} />
          <Forecast data={send.four} />
        </div>
      </div>
    );
  } else {
    search();
  }
}
