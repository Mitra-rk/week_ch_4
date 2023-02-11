import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Forecast(props) {
  if (props.data) {
    return (
      <div className="col p-2 Forecast">
        <div>{props.data.time}</div>
        <div>
          <img class="imgIcon"src={props.data.condition.icon_url}></img>
        </div>
        <div>
          <span class="max">{Math.round(props.data.temperature.maximum)}</span>
          <span class="min">{Math.round(props.data.temperature.minimum)}</span>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
