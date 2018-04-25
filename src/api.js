import axios from "axios";

const API_KEY = "5a043a1bd95bf3ee500eb89de107b41e";
const API_URL = "http://api.openweathermap.org/data/2.5";

export const queryWeather = async city => {
  const endpoint = `${API_URL}/weather?q=${city.trim()}&appid=${API_KEY}`;
  const weatherData = await axios.get(endpoint);
  return weatherData.data;
};
