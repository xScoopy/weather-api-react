import { useState } from "react";
import RadioButton from "./RadioButton";
import WeatherDisplay from "./WeatherDisplay";
import "./Weather.css";
const Weather = () => {
  const weatherKey = `${process.env.REACT_APP_APIKEY}`;
  const [zip, setZip] = useState("");
  const [unit, setUnit] = useState("");
  const [data, setData] = useState(null);
  const fetchWeather = async () => {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${weatherKey}&units=${unit}`;

    const res = await fetch(path);
    const json = await res.json();

    const cod = json.cod;
    const message = json.message;
    if (cod !== 200) {
        setData({cod, message})
        return
    }
    const temp = json.main.temp;
    const feelsLike = json.main.feels_like;
    const description = json.weather[0].description;

    setData({
      cod,
      message,
      temp,
      feelsLike,
      description,
    });
  };

  return (
    <div className="Weather">
      {data !== null ? <WeatherDisplay {...data} /> : "No weather data"}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}
      >
        <div>
          <input
            placeholder="Enter Zip Code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
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
