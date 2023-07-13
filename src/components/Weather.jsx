import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import UvIndex from "./UvIndex";
import Wind from "./Wind";
import Days7Forecast from "./Days7Forecast";
import TodayForecast from "./TodayForecast";
import { useWeather } from "../context/WeatherContext";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

function Weather() {
  const { loading, error } = useWeather();

  return (
    <main className="lg:order-2 order-1 weather-grid-template lg:grid-cols-4 grid-cols-1 lg:grid-rows-auto1fr1fr gap-y-9 gap-x-5">
      <SearchBar />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <>
          <WeatherInfo />
          <UvIndex />
          <Wind />
          <Days7Forecast />
          <TodayForecast />
        </>
      )}
    </main>
  );
}

export default Weather;
