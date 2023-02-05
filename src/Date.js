import React from "react";

export default function Date(props) {
  
  let week = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  
    let day = week[props.time.getDay()];
    let hour = props.time.getHours();
    let min = props.time.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

  
  return (
    <div className="Date">
      
    </div>
  );
}
