import { useCallback } from "react";

export default function useHttp() {
  const request = useCallback(async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (err) {
			console.log("Error fetching data:", err);
			alert("Incorrect city name")
      throw err;
    }
  }, []);

	return {request};
}