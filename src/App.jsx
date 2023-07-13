import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className=" box-border bg-gray-900 text-white">
      <WeatherProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;
