import { FaMagnifyingGlass } from "react-icons/fa6";
import WeatherTemp from "../weatherTemp/WeatherTemp";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import useHttp from "../../hooks/useHttp";
import { useRef, useState, useEffect, useCallback } from "react";
import "./interface.scss";

export default function Interface() {
  const { fetchWeather } = useHttp();
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
  });
  const inputCity = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchWeather("Uzhhorod").then((data) =>
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      })
    );
  }, []);

  const onSearch = useCallback(() => {
    if (inputCity.current && inputCity.current.value != "") {
      const city = inputCity.current?.value as string;
      fetchWeather(city).then((data) =>
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        })
      );
    }
  }, [fetchWeather]);

  return (
    <div className="interface">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          className="search-bar-input"
          ref={inputCity}
        />
        <button className="search-bar-button" onClick={onSearch}>
          <FaMagnifyingGlass />
        </button>
      </div>
      <WeatherTemp {...weatherData}/>
      <WeatherInfo {...weatherData}/>
    </div>
  );
}
