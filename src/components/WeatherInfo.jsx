import moment from "moment";
import { useWeather } from "../context/WeatherContext";
function WeatherInfo() {
  const { hourlyWeatherData, getWeatherIcon, town } = useWeather();

  if (!hourlyWeatherData) return;
  const now = moment().format("YYYY-MM-DDTHH[:]00");
  const actualIndex = hourlyWeatherData.time.findIndex((date) => date === now);
  return (
    <div className="lg:row-start-2 ml-6 text-2xl font-bold tracking-wide flex flex-col gap-6 lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center lg:col-span-3">
      <h2 className="row-start-1">{town}</h2>
      <p className="row-start-2 text-4xl">
        {hourlyWeatherData.temperature_2m[actualIndex]}°C
      </p>
      <object className="row-span-2 w-40" data={getWeatherIcon(actualIndex)}>
        weather icon
      </object>
    </div>
  );
}

export default WeatherInfo;
