import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";


export default function WeatherInfo({humidity, windSpeed}: {humidity: number, windSpeed: number}) { 
	return (
		<div className="interface__info">
        <div className="interface__info-block">
          <WiHumidity className="interface__info-block__icon" />
          <div className="interface__info-block__stats">
            <span className="interface__info-block-value">
              {humidity}%
            </span>
            <span className="interface__info-block-label">Humidity</span>
          </div>
        </div>
        <div className="interface__info-block">
          <LuWind className="interface__info-block__icon" />
          <div className="interface__info-block__stats">
            <span className="interface__info-block-value">
              {windSpeed}km/h
            </span>
            <span className="interface__info-block-label">Speed</span>
          </div>
        </div>
      </div>
	);
}