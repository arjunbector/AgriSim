"use client";
import Navbar from "@/components/Navbar";
import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

export default function Home() {
  const API_endpoint = `https://api.openweathermap.org/geo/1.0/reverse?`;
  const [coords, setCoords] = useState({
    lat: "0",
    long: "0",
  });
  const [location, setLocation] = useState("");
  const [climateData, setClimateData] = useState({});
  useEffect(() => {
    getCoordinates();
  }, []);
  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setCoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      getLocation(position.coords.latitude, position.coords.longitude);
    });
  };

  const getLocation = (lat, long) => {
    fetch(
      `${API_endpoint}lat=${lat}&lon=${long}&limit=5&appid=044253218f70c57471b31e819f0bf922`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data from api");
        console.log(data);
        getData(data[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = (loc) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=044253218f70c57471b31e819f0bf922`
    )
      .then((res) => res.json())
      .then((data) => {
        setClimateData(data);
        console.log(data);
      });
  };
  return (
    <main className="bg-[color:var(--agrisim-background)] min-h-screen">
      <Navbar />
      <div className="h-10 flex bg-[color:var(--primary)] mx-2 rounded-xl text-white justify-center items-center my-5">
        <h1 className="">Climate Details</h1>
      </div>
      <div>
        <div className="font-medium">Wind Speed  - {}</div>
        <div className="font-medium">Rainfall - </div>
        <div className="font-medium">Max Temperature - </div>
        <div className="font-medium">Min Temperature - </div>
        <ReactLoading type={balls}/>
      </div>
    </main>
  );
}
