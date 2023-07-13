import { useWeather } from "../context/WeatherContext";
import rain from "../images/rain.svg";

const today = new Date().toISOString().split("T")[0];

function Days7ForecastItem({ i }) {
  const { dailyWeatherData } = useWeather();

  return (
    <li className="flex gap-3 items-center justify-between ">
      <div className="flex gap-3">
        <p>
          {dailyWeatherData.time[i] === today
            ? "Today"
            : new Date(dailyWeatherData.time[i]).toLocaleDateString("en-US", {
                weekday: "long",
              })}
        </p>
        <div className="flex gap-2">
          <object className="w-4 flex" data={rain}>
            Rain
          </object>
          <span>{dailyWeatherData.precipitation_probability_max[i]}%</span>
        </div>
      </div>
      <p className="justify-self-end">
        {dailyWeatherData.temperature_2m_max[i]}°{" "}
        {dailyWeatherData.temperature_2m_min[i]}°
      </p>
    </li>
  );
}

export default Days7ForecastItem;
