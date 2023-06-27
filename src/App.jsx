import React, { useState, useEffect } from "react";

import Layout from "./layout/Layout";

import assets from "../src/assets/background.jpg";

function App() {
  return (
    <Layout>
      <div>
        <h1 className="font-bold text-2xl flex justify-center my-8">
          Good Morning, People!
        </h1>
        <h2 className="font-semibold text-xl flex justify-center my-4">
          Current Weather
        </h2>

        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex justify-center my-8">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={assets} alt="Background" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">London</h2>
              <p className="text-lg font-medium">Rain</p>
              <p className="text-md font-medium">32&deg;C</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Wind</div>
              <div className="stat-value">31 m/s</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Humidity</div>
              <div className="stat-value">50%</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-lg font-semibold">Clouds</div>
              <div className="stat-value">25%</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
