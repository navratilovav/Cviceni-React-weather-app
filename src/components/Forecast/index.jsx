import React from "react";
import './style.css';
import {convertDate} from '../../utils/index.js';

const Forecast = ({forecast}) => {
    return (
        <>
        {forecast && forecast.map ((item, index) => 
                <div className="forecast" key={index}>
                    <div className="forecast__day">{convertDate(forecast[index].dt)}</div>
                    <div className="forecast__icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${forecast[index].weather[0].icon}@2x.png`}
                        style={{height: "100%"}}
                        alt="current weather icon"/>
                    </div>
                    <div className="forecast__temp">{Math.round(forecast[index].main.temp)} °C</div>
                </div>
            )}
        </>
    )
}

export default Forecast;