import icon from "../../assets/cloudy.png";


export default function WeatherTemp({city, temperature}: {city: string, temperature: number}) {
  return (
    <>
      <h2>{city}</h2>
      <img src={icon} alt="weather-icon" className="interface__icon" />
      <div className="interface__temperature">
        <span className="interface__temperature-value">{temperature}°C</span>
        <span className="interface__temperature-clouds">Clouds</span>
      </div>
    </>
  );
}
