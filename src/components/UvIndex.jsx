import { useWeather } from "../context/WeatherContext";
import CircualProgressBar from "./CircualProgressBar";

function UvIndex() {
  const { dailyWeatherData } = useWeather();

  if (!dailyWeatherData) return;

  return (
    <div className="lg:row-start-2 backdrop-blur bg-white/20 rounded-2xl flex items-center justify-center relative">
      <CircualProgressBar v={dailyWeatherData.uv_index_max[0]} />
      <span className="absolute translate-x-5 top-0 left-0 translate-y-2 text-gray-400 uppercase font-bold">
        UV index
      </span>
    </div>
  );
}

export default UvIndex;
