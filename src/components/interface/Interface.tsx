import { FaMagnifyingGlass } from "react-icons/fa6";
import icon from "../../assets/cloudy.png";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import  useHttp  from "../../hooks/useHttp";
import { useRef } from "react";
import "./interface.scss";

export default function Interface() {
	const {fetchWeather} = useHttp();
	const inputCity = useRef(null)

	const onSearch = () =>{
		if(inputCity.current.value){
			const city = inputCity.current.value;
		fetchWeather(city)
		.then()
		}
	}
  return (
    <div className="interface">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          className="search-bar-input"
					ref={inputCity}
        />
        <button className="search-bar-button"
				onClick={onSearch}
				>
          <FaMagnifyingGlass />
        </button>
      </div>
      <h2>Uzhhorod</h2>
      <img src={icon} alt="weather-icon" className="interface__icon" />
      <div className="interface__temperature">
        <span className="interface__temperature-value">22°C</span>
        <span className="interface__temperature-clouds">Clouds</span>
      </div>
      <div className="interface__info">
        <div className="interface__info-block">
          <WiHumidity className="interface__info-block__icon" />
          <div className="interface__info-block__stats">
            <span className="interface__info-block-value">60%</span>
            <span className="interface__info-block-label">Humidity</span>
          </div>
        </div>
        <div className="interface__info-block">
          <LuWind className="interface__info-block__icon" />
          <div className="interface__info-block__stats">
            <span className="interface__info-block-value">60km/h</span>
            <span className="interface__info-block-label">Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
