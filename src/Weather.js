import { useState } from "react";
import RadioButton from "./RadioButton";
import "./Weather.css";
const Weather = () => {
  const [zip, setZip] = useState("55076");
  const [unit, setUnit] = useState("imperial");

  return (
    <div className="Weather">
      <h1>
        {zip} {unit}
      </h1>
      <form>
        <div>
          <input
            placeholder="Enter Zip Code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
          />
          <button>Submit</button>
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
