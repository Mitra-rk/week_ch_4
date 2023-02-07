import React, { useState } from "react";

export default function Unit(props) {
  let temp = Math.round(props.data);
  let [tem, setTem] = useState("");

  function toFara() {
    temp = Math.round(props.data * 1.8 + 32);

    setTem(temp);
  }
  function toCel() {
    temp = Math.round(props.data);
    setTem(temp);
  }

  return (
    <div className="Unit">
      <span className="Degree m-2">{tem}</span>
      <ul>
        <li id="temprature" className="Units " onClick={toCel}>
          °C
        </li>
        <li className="Units" onClick={toFara}>
          {" "}
          | F°
        </li>
      </ul>
    </div>
  );
}
