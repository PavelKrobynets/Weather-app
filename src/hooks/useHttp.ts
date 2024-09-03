

export default function useHttp() {
  const api_key: string = "dac2d47ecea599c78eda18e68d8295fb";
  const url = "https://api.openweathermap.org/data/2.5/weather?";

	const fetchWeather = async (city: string): Promise<object> => {
		const response = await fetch(`${url}q=${city}&appid=${api_key}`);
		const data = await response.json();
		return data;
	}

	return { fetchWeather }
}

