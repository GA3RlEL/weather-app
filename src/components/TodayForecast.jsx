import moment from "moment";
import { useWeather } from "../context/WeatherContext";
import TodayForecastItem from "./TodayForecastItem";

function TodayForecast() {
  const { hourlyWeatherData } = useWeather();

  if (!hourlyWeatherData) return;

  const hours6Array = Array.from({ length: 6 }, (_, i) =>
    moment().add(i, "hours").format("YYYY-MM-DDTHH[:]00")
  );

  const hours6Index = hours6Array.map((item) =>
    hourlyWeatherData.time.indexOf(item)
  );

  return (
    <div className="today-forecast-grid lg:row-start-3 lg:col-span-2 backdrop-blur bg-white/20 rounded-2xl p-3 h-6/8 lg:h-3/4 ">
      <p className="uppercase font-bold text-gray-400">Today&apos;s forecast</p>
      <ul
        className="grid grid-cols-auto3 md:grid-rows-auto2 md:grid-cols-6  2xl:flex items-center p-4 
font-bold gap-3 justify-center"
      >
        {hours6Index.map((item, i) => (
          <TodayForecastItem index={item} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default TodayForecast;
