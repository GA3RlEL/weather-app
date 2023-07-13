import { useWeather } from "../context/WeatherContext";
import LoadingSearchSpinner from "./LoadingSearchSpinner";
import SearchItem from "./SearchItem";

function SearchBar() {
  const { search, setSearch, searchTowns, loadingSearch } = useWeather();
  return (
    <div className="lg:col-span-3 relative">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl p-2 backdrop-blur bg-white/20"
        placeholder="Search for cities"
        type="text"
      />
      {search.length >= 2 && (
        <div className="absolute mt-3 backdrop-blur bg-white/20 w-full rounded-2xl p-2 z-10">
          {loadingSearch && <LoadingSearchSpinner />}
          {searchTowns === undefined && (
            <p>There are no cities with that name &quot;{search}&quot; </p>
          )}
          {!loadingSearch && searchTowns !== undefined && (
            <ul className="flex flex-col gap-2">
              {searchTowns.map((town) => (
                <SearchItem town={town} key={town.id} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
