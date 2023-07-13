import { useWeather } from "../context/WeatherContext";

function SearchItem({ town }) {
  const { setLngLat } = useWeather();
  return (
    <li
      className="flex items-center gap-3 cursor-pointer hover:bg-white/20 hover:backdrop-blur rounded-2xl p-1 transition-all"
      onClick={() => setLngLat(town.longitude, town.latitude, town.name)}
    >
      <img
        src={`https://flagsapi.com/${town.country_code}/flat/32.png`}
        alt={town.country_code}
      />
      {town.name}
    </li>
  );
}

export default SearchItem;
