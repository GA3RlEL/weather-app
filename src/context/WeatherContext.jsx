import { createContext, useContext, useEffect, useState } from "react";
import sun from "../images/sun.svg";
import rain from "../images/rain.svg";
import snow from "../images/snow.svg";
import night from "../images/night.svg";
import cloudnight from "../images/cloudnight.svg";
import cloud from "../images/cloud.svg";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [dailyWeatherData, setDailyWeatherData] = useState(null);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [town, setTown] = useState(null);
  const [search, setSearch] = useState("");
  const [searchTowns, setSearchTowns] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  console.log(JSON.parse(localStorage.getItem("town")));

  function setLngLat(newLng, newLat, town) {
    setLat(newLat);
    setLng(newLng);
    setSearch("");
    setTown(town);
  }

  useEffect(
    function () {
      async function getWeatherData() {
        setError(null);
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&timezone=auto`
          );
          if (!res.ok) setError(`error code:${res.status}`);
          const data = await res.json();
          setDailyWeatherData(data.daily);
          setHourlyWeatherData(data.hourly);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      if (lat && lng) {
        localStorage.setItem("town", JSON.stringify({ lat, lng, town }));
        getWeatherData();
      }
    },
    [lat, lng, town]
  );

  useEffect(
    function () {
      async function getTowns() {
        try {
          setLoadingSearch(true);
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`
          );
          if (!res.ok) setError(`error code:${res.status}`);
          const data = await res.json();
          console.log(data.results);
          setSearchTowns(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoadingSearch(false);
        }
      }
      if (search.length >= 2) getTowns();
    },

    [search]
  );

  useEffect(
    function () {
      if (!localStorage.getItem("town"))
        localStorage.setItem("town", JSON.stringify({ lat, lng, town }));
      const retrieveLocalData = JSON.parse(localStorage.getItem("town"));
      setLat(retrieveLocalData.lat);
      setLng(retrieveLocalData.lng);
      setTown(retrieveLocalData.town);
      if ((!lat, !lng, !town)) setError("Search for some town");
    },
    [lat, lng, town]
  );

  function getWeatherIcon(index) {
    const hour = Number(hourlyWeatherData.time[index].slice(11, 13));
    const weatherCode = hourlyWeatherData.weathercode[index];

    if (
      (weatherCode >= 51 && weatherCode <= 65) ||
      (weatherCode >= 80 && weatherCode <= 82)
    )
      return rain;

    if (
      (weatherCode >= 71 && weatherCode <= 77) ||
      (weatherCode >= 85 && weatherCode <= 86)
    )
      return snow;

    if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour <= 6)) {
      if (weatherCode >= 1 && weatherCode <= 3) return cloudnight;
      else return night;
    } else if (hour >= 7 && hour <= 21) {
      if (weatherCode >= 1 && weatherCode <= 3) return cloud;
      else return sun;
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        dailyWeatherData,
        loading,
        hourlyWeatherData,
        error,
        getWeatherIcon,
        town,
        search,
        setSearch,
        searchTowns,
        loadingSearch,
        setLngLat,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("You have used weather provider out of range");
  return context;
}

export { WeatherProvider, useWeather };
