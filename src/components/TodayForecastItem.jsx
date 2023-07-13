import { useWeather } from "../context/WeatherContext";

function TodayForecastItem({ index }) {
  const { hourlyWeatherData, getWeatherIcon } = useWeather();

  return (
    <li className="backdrop-blur bg-white/20 rounded-2xl py-4 px-6 flex flex-col gap-3 items-center">
      <span>{hourlyWeatherData.time[index].slice(11, 13)}:00</span>
      <object className="w-8" data={getWeatherIcon(index)}>
        weathericon
      </object>
      <p>{hourlyWeatherData.temperature_2m[index]}°</p>
    </li>
  );
}

export default TodayForecastItem;
