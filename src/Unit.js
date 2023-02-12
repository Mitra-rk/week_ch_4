import React, { useState, useEffect } from "react";
import "./App.css";
export default function Unit(props) {
  let [temp, SetTemp] = useState(Math.round(props.data));

  useEffect(() => {
    SetTemp(Math.round(props.data));
  }, [props.data]);

  return (
    <div className="Unit d-inline-flex">
      <span className="Degree p-2">{temp}</span>

      <ul className="p-0">
        <li
          id="temprature"
          className="Units "
          onClick={() => SetTemp(Math.round(props.data))}
        >
          °C
        </li>
        <li
          id="fara"
          className="Units "
          onClick={() => SetTemp(Math.round(props.data * 1.8 + 32))}
        >
          {" "}
          | F°
        </li>
      </ul>
    </div>
  );
}
