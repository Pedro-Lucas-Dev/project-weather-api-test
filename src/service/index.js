import axios from "axios";

const BASE_URL = "https://api.hgbrasil.com/weather";

const GetWeather = async () => {
  const weatherInformations = await axios(`${BASE_URL}`);
  return weatherInformations;
};

export { GetWeather };
