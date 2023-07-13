import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import { useWeather } from "../context/WeatherContext";

function HomePage() {
  const { loading, error } = useWeather();
  return (
    <div
      className={`p-3 grid lg:grid-cols-auto1fr grid-rows-mobile lg:h-screen ${
        error && "h-screen"
      }  lg:gap-x-4 gap-y-4 ${loading && "h-screen"}`}
    >
      <Navigation />
      <Weather />
    </div>
  );
}

export default HomePage;
