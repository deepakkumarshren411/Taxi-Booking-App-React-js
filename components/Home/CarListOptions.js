"use client";
import { CarListData } from "./../../utils/CarListData";
import React, { useState } from "react";
import CarListItem from "./CarListItem";
import { useRouter } from "next/navigation";

function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setselectedCar] = useState([]);
  const router = useRouter();

  return (
    <div className="mt-5 p-5 overflow-auto h-[250px]">
      <h2 className="text-[22px]  font-bold">Recommended</h2>
      {CarListData.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 px-4 rounded-md border-black ${
            activeIndex == index ? "border-[2px]" : null
          }`}
          onClick={() => {
            setActiveIndex(index);
            setselectedCar(item);
          }}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}

      {selectedCar?.name ? (
        <div className="flex justify-between fixed bottom-5 shadow-xl p-3 bg-white w-full md:w-[30%] border-[1px] items-center rounded-lg">
          <h2 className="font-semibold cursor-pointer text-green-600">
            {" "}
            Make Payment For
          </h2>
          <button
            className="p-3 bg-black text-white rounded-lg text-center"
            onClick={() =>
              router.push(
                "/payment?amount=" + (selectedCar.amount * distance).toFixed(2)
              )
            }
          >
            Request {selectedCar.name}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CarListOptions;
