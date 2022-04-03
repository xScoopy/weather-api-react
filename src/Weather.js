import { useState } from "react";
import "./Weather.css";
const Weather = () => {
  const [zip, setZip] = useState("55076");

  return (
    <div className="Weather">
      <form>
        <input 
            placeholder="Enter Zip Code"
            value={zip}
            onChange={(e) => {setZip(e.target.value)}}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Weather;
