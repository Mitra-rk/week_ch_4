import React, { useState } from "react";

export default function Unit(props) {
  let [s,t] = useState("");
   t(props.data);
  function toFara() {
    let fara = Math.round(props.data * 1.8 + 32);
    t(fara);
  }
  function toCel() {
    let cel = Math.round(props.data);
    t(cel);
  }

  return (
    <div className="Unit">
      <span className="Degree m-2">{s}</span>

      <a href="#" id="temprature" className="Units " onClick={toCel}>
        °C
      </a>
      <a href="#" className="Units" onClick={toFara}>
        {" "}
        | F°
      </a>
    </div>
  );
}
