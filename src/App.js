import "./App.css";
// import Weather from "./Weather";
import DisplayTemp from './DisplayTemp'
import LoadWeather from "./LoadWeather";

function App() {
  return (
    <div className="App">
      <DisplayTemp />
      <LoadWeather />
    </div>
  );
}

export default App;
