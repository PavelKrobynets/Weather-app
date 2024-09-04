import useHttp from "../hooks/useHttp";
import { icons } from "../utils/icons.ts";

export default function WeatherService() {
  const api_key: string = "dac2d47ecea599c78eda18e68d8295fb";
  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const { request } = useHttp();

  interface WeatherData {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
  }

  const _transformWeatherInfo = (data: WeatherData) => {
		const iconName = icons[data.weather[0].icon as keyof typeof icons]
    return {
      city: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      description: data.weather[0].description,
      icon: iconName,
    };
  };

  const fetchWeather = (city: string) => {
    return request(`${url}q=${city}&appid=${api_key}&units=metric`)
      .then((data) => {
        return _transformWeatherInfo(data);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  return { fetchWeather };
}
