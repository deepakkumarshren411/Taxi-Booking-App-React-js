"use client";
import React, { useContext, useState } from "react";
import InputItem from "./InputItem";
import { SourceContext } from "../../public/context/SourceContext";
import { DestinationContext } from "../../public/context/DestinationContext";
import CarListOptions from "./CarListOptions";

function SearchSection() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();

  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: parseFloat(source.lat), lng: parseFloat(source.lng) },
      { lat: parseFloat(destination.lat), lng: parseFloat(destination.lng) }
    );
    console.log(Math.round(dist * 0.000621374));
    setDistance(Math.round(dist * 0.000621374)); // Convert to kilo meters
  };

  return (
    <div>
      <div className="p-2 md:pd-6 border-[2px] rounded-xl cursor-pointer">
        <p className="text-[20px] font-semibold">Get a Ride</p>
        <InputItem type="source" />
        <InputItem type="destination" />
        <button
          className="p-4 bg-black w-full mt-5 text-white rounded-lg"
          onClick={() => calculateDistance()}
        >
          Search
        </button>
      </div>
      {distance ? <CarListOptions distance={distance} /> : null}
    </div>
  );
}

export default SearchSection;
