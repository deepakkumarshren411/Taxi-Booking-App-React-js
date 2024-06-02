"use client";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";

function CarListItem({car, distance}) {
  return (
    <div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-5 ">
          <Image src={car.image} width={100} height={100} />
          <div>
            <h2 className="font-semibold text=[18px] flex gap-3 items-center">
              {car.name}

              <span className="flex gap-3 text-[14px] font-normal items-center">
                <FaUser /> 
                <br />
                {car.seat}
              </span>
            </h2>
            <p>{car.desc}</p>
          </div>
        </div>
        <div>
          <h2 className="text-[18px] font-semibold">
         <span>&#8377;</span> {(car.amount * distance).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CarListItem;
