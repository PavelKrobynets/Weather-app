import "./interface.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import icon from "../../assets/cloudy.png";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";

export default function Interface() {
  return (
    <div className="interface">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          className="search-bar-input"
        />
        <button className="search-bar-button">
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
        <div className="interface__info-humidity">
          <WiHumidity/>
          <span className="interface__info-humidity-value">60%</span>
          <span className="interface__info-humidity-label">Humidity</span>
        </div>
        <div className="interface__info-speed">
				<LuWind />
          <span className="interface__info-speed-value">60km/h</span>
          <span className="interface__info-speed-label">Speed</span>
				</div>
      </div>
    </div>
  );
}
