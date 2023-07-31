import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";

import Layout from "./layout/Layout";
import Image from "./components/Image";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Jakarta");
  const [currentTime, setCurrentTime] = useState("");
  const [greeting, setGreeting] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // console.log(url)

  const searchCity = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setWeather(response.data);
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(format(now, "HH:mm:ss"));
      setGreeting(getGreeting(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = (time) => {
    const hour = time.getHours();

    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="font-bold text-2xl flex justify-center my-8">
          {greeting}
        </h1>
        <h2 className="font-semibold text-xl flex justify-center my-4">
          Current Weather
        </h2>

        <div className="flex justify-center items-center px-4">
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyUp={searchCity}
            placeholder="Enter City"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex justify-center my-8">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Image time={currentTime} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{weather.name}</h2>
              {weather.weather ? (
                <p className="text-lg font-bold">{weather.weather[0].main}</p>
              ) : null}
              {/* <p className="text-lg font-bold">Rain</p> */}
              {weather.main ? (
                <p className="text-md font-bold">{weather.main.temp}&deg;C</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Wind</div>
              {weather.wind ? (
                <div className="stat-value">{weather.wind.speed} m/s</div>
              ) : null}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Humidity</div>
              {weather.main ? (
                <div className="stat-value">{weather.main.humidity}%</div>
              ) : null}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Clouds</div>
              {weather.clouds ? (
                <div className="stat-value">{weather.clouds.all}%</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
