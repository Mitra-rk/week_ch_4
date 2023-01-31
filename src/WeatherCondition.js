export default function WeatherCondiotion() {
  return (
    <div className="WeatherCondiotion">
      <div className="Current">
        <div class="cityTime">
          <h1 id="city">New York</h1>
          <p id="day">Last updated at:</p>
          <p id="condition">Mostly Cloudy</p>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-7">
              <img id="image" src="" alt="" />
              <strong id="temprature"> 6 °C</strong>
            </div>
            <div class="col-5">
              <ul>
                <li id="humid">Humidity: %</li>
                <li id="wind">Wind: Km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
