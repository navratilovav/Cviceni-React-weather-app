import React, { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import CurrentWeather from "./components/CurrentWeather";
import {getFiveDaysweatherForecast} from './utils/index.js';
import {cities} from "./utils/index.js";

const App = () => {

  const appiKey = process.env.REACT_APP_MY_API_ID;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Olomouc');
  const [forecast, setForecast] = useState(null);

  const fetchWeather = (city) => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appiKey}`)
    .then(response => response.json())
    .then(json => setWeather(json))
  }

  const fetchWeatherForecast = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${appiKey}`)
    .then(response => response.json())
    .then(json => setForecast(getFiveDaysweatherForecast(json.list, 8))) 
  }

  useEffect(() => {
    fetchWeather(city);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  useEffect(() => {
    fetchWeatherForecast(city);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather])

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        {/* <div className="button-group">
          <button className="button" onClick={({target}) => setCity(target.value)} value="Prague">Prague</button>
          <button className="button" onClick={({target}) => setCity(target.value)} value="Istanbul">Istanbul</button>
          <button className="button" onClick={({target}) => setCity(target.value)} value="Stockholm">Stockholm</button>
        </div> */}

        <div className="select-wrapper">
          <select 
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={({target}) => setCity(target.value)}>
            {cities.map(city => <option value={city} key={city}>{city}</option>)}
          </select>
        </div>

          <div className="weather"> <CurrentWeather weather = {weather}/>
          <div className="weather__forecast" id="predpoved"> <Forecast forecast = {forecast} />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default App;