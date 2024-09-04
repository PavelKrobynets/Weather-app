import { FaMagnifyingGlass } from "react-icons/fa6";
import WeatherTemp from "../weatherTemp/WeatherTemp";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import WeatherService from "../../services/WeatherService";
import { useRef, useState, useEffect, useCallback } from "react";
import "./interface.scss";

export default function Interface() {
  const { fetchWeather } = WeatherService();
  const [weatherData, setWeatherData] = useState({
		city: '',
		temperature: 0,
		humidity: 0,
		wind: 0,
		description: '',
		icon: '',
	});
  const inputCity = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchWeather("Uzhhorod").then(setWeatherData);
  }, []);

  const onSearch = useCallback(() => {
    if (inputCity.current && inputCity.current.value != "") {
      fetchWeather(inputCity.current.value).then(setWeatherData);
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
      <WeatherTemp {...weatherData} />
      <WeatherInfo {...weatherData} />
    </div>
  );
}
