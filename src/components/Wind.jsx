import { useWeather } from "../context/WeatherContext";
import wind from "../images/wind.svg";
import moment from "moment/moment";
function Wind() {
  const { hourlyWeatherData } = useWeather();

  if (!hourlyWeatherData) return;
  const now = moment().format("YYYY-MM-DDTHH[:]00");
  const actualWind = hourlyWeatherData.time.findIndex((date) => date === now);
  return (
    <div className="lg:row-start-3 lg:col-start-4 backdrop-blur bg-white/20 rounded-2xl flex flex-col gap-5 items-center justify-center p-4">
      <object data={wind} className="w-20">
        wind
      </object>
      <h2 className="text-2xl font-bold">Wind</h2>
      <span className="text-gray-300">
        {hourlyWeatherData.windspeed_10m[actualWind]} km/h
      </span>
    </div>
  );
}

export default Wind;
