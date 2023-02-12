import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast(props) {
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let [loaded, setLoaded] = useState(false);
  let [info, setInfo] = useState(props.data);

  useEffect(() => {
    setInfo(props.data);
  }, [props.data]);
  
  if (loaded) {
    let date1 = info.time * 1000;
    let date = new Date(date1);
    let day = date.getDay();

    return (
      <div className="col p-2 Forecast">
        <div>{week[day]}</div>
        <div>
          <img
            alt="Weather Icon"
            class="imgIcon"
            src={info.condition.icon_url}
          ></img>
        </div>
        <div>
          <span class="max">{Math.round(info.temperature.maximum)}</span>
          <span class="min">{Math.round(info.temperature.minimum)}</span>
        </div>
      </div>
    );
  } else if (info) {
    setLoaded(true);
  }
}
