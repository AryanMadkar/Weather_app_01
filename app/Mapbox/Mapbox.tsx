"use client";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { duration } from "moment";
import { useGlobalContext } from "../context/GLobal_context";

function FlytoActualCity({ activecitycordinates }) {
  const map = useMap();
  useEffect(() => {
    if (activecitycordinates) {
      const zoomlev = 13;
      const flytoOptions = {
        duration: 1.5,
      };
      map.flyTo(
        [activecitycordinates.lat, activecitycordinates.lon],
        zoomlev,
        flytoOptions
      );
    }
  }, [activecitycordinates, map]);
  return null;
}
const Mapbox = () => {
  const { forecast } = useGlobalContext();

  const activecitycordinates1 = forecast?.coord;

  if (!forecast || !activecitycordinates1||!forecast.coord) {
    return (
      <div>
        <h1>Loding...</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-[20rem] basis-[50%] border col-span-3 rounded-xl bg-zinc-900">
      <MapContainer
        center={[activecitycordinates1.lat, activecitycordinates1.lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "20rem", width: "calc(100%-2rem)" }}
        className="rounded-xl m-4"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FlytoActualCity activecitycordinates={activecitycordinates1} />
        
      </MapContainer>
    </div>
  );
};

export default Mapbox;
