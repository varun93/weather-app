import React from "react";
import "./style.css";

const kelvinToCelsius = kelvin => kelvin - 273.15;

const round = (value, decimals = 1) => {
  const x = Math.pow(10, decimals);
  return Math.round(x * value) / x;
};

const WeatherReport = ({ reports = [], removeCity }) => {
  return (
    <ul>
      {reports.map((city, index) => {
        const item = {
          temperature: round(kelvinToCelsius(city.main.temp), 0),
          humidity: city.main.humidity,
          icon: city.weather[0].id,
          name: city.name
        };
        // console.log()
        return (
          <li>
            <div className="item">
              <div className="left">
                <div> {item.name} </div>
                <span> {item.temperature} </span>
                <span> {item.humidity} </span>
              </div>
              <div className="right">
                <span
                  onClick={() => {
                    removeCity(index);
                  }}
                >
                  X
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default WeatherReport;
