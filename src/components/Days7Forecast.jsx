import { useWeather } from "../context/WeatherContext";
import Days7ForecastItem from "./Days7ForecastItem";

function Days7Forecast() {
  const { dailyWeatherData } = useWeather();

  if (!dailyWeatherData) return;

  return (
    <div className="lg:row-start-3 lg:col-span-1 backdrop-blur bg-white/20 rounded-2xl p-3">
      <p className="uppercase font-bold text-gray-400">7 days forecast</p>
      <ul className="h-9/10  flex flex-col justify-around font-bold ">
        {dailyWeatherData["time"].map((_, i) => (
          <Days7ForecastItem i={i} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Days7Forecast;
