import "./App.css";
import WeatherCondiotion from "./WeatherCondition";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="Container">
          <div className="SearchEngine ">
            <form>
              <input type="text" className=""></input>
              <input type="submit" value="Search"></input>
            </form>
          </div>
          <div className="display">
            <WeatherCondiotion />
          </div>
        </div>
        <a href="#">this is the link</a>
      </div>
    </div>
  );
}
