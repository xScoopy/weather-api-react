import { useState } from "react";
import RadioButton from "./RadioButton";
import "./Weather.css";
const Weather = () => {

  const weatherKey = `${process.env.REACT_APP_APIKEY}`;
  console.log(weatherKey)
  const [zip, setZip] = useState("");
  const [unit, setUnit] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
      await fetch()
      return
  }

  return (
    <div className="Weather">
      <h1>
        {data !== null ? data : "No weather data"}
      </h1>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <div>
          <input
            placeholder="Enter Zip Code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
              fetchWeather();
            }}
          />
          <button type="submit">Submit</button>
        </div>
        <select
          onChange={(e) => {
            setUnit(e.target.value);
          }}
          value={unit}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        <RadioButton
          name="unit"
          label="metric"
          checked={unit === "metric"}
          onChange={() => setUnit("metric")}
        />
        <RadioButton
          name="unit"
          label="imperial"
          checked={unit === "imperial"}
          onChange={() => setUnit("imperial")}
        />
        <RadioButton
          name="unit"
          label="standard"
          checked={unit === "standard"}
          onChange={() => setUnit("standard")}
        />
      </form>
    </div>
  );
};
export default Weather;
