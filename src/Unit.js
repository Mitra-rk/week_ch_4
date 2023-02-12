import React, { useState, useEffect } from "react";

export default function Unit(props) {
  let [temp, SetTemp] = useState(Math.round(props.data));

  useEffect(() => {
    SetTemp(Math.round(props.data));
  }, [props.data]);

  return (
    <div className="Unit">
      <span className="Degree m-2">{temp}</span>
      <ul>
        <li
          id="temprature"
          className="Units "
          onClick={() => SetTemp(Math.round(props.data))}
        >
          °C
        </li>
        <li
          id="fara"
          className="Units"
          onClick={() => SetTemp(Math.round(props.data * 1.8 + 32))}
        >
          {" "}
          | F°
        </li>
      </ul>
    </div>
  );
}
