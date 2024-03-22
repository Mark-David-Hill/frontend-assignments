import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Weather() {
  const [weatherType, setWeatherType] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit&wind_speed_unit=mph&latitude=40.29&longitude=-111.69&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherType(getWeatherFromCode(data.current.weather_code));
        setWindSpeed(data.current.wind_speed_10m);
        setTemp(data.current.temperature_2m);
        console.log(data.current.weather_code);
      })
      .catch((err) => {
        console.error("Get Weather Data Error: ", err);
      });
  }, []);

  const getWeatherFromCode = (code) => {
    if (code === 0) {
      return "Clear Sky";
    } else if (code > 0 && code <= 12) {
      return "Partly Cloudy";
    } else if (code > 12 && code <= 19) {
      return "Storm Approaching";
    } else if ((code > 19 && code <= 29) || code > 49) {
      return "Precipitation";
    } else if (code > 29 && code <= 39) {
      return "Duststorm";
    } else if (code > 39 && code <= 49) {
      return "Fog";
    } else {
      return "Precipitation";
    }
  };

  return (
    <div className="widget-container">
      {temp ? (
        <>
          <h2>Orem, UT</h2>
          <h3>current: {weatherType && weatherType}</h3>
          <h3>temperature: {temp ? temp : "Fetching Data..."}°F</h3>
          <h3>wind speed: {windSpeed && windSpeed} mph</h3>
        </>
      ) : (
        <FontAwesomeIcon icon="fa-circle-notch" spin />
      )}
    </div>
  );
}

export default Weather;
