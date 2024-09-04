import useHttp from "../hooks/useHttp";

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
		weather: {
			description: string;
			icon: string;
		};
	}

  const _transformWeatherInfo = (data: WeatherData) => {
    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      description: data.weather.description,
      icon: `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`,
    };
  };

	const fetchWeather = (city:string) => {
		request(`${url}q=${city}&appid=${api_key}&units=metric`)
		.then(data => _transformWeatherInfo(data))
		.catch(error => {
			console.error(error);
			throw error;
		})
	} 

	return {fetchWeather}
}
