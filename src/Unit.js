export default function Unit(props) {
  return (
    <div className="Unit">
      <span className="Degree m-2">{Math.round(props.temp)}</span>

      <a href="#" id="temprature" className="Units ">
        °C
      </a>
      <a href="#" className="Units">
        {" "}
        | F°
      </a>
    </div>
  );
}
