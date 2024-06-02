"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu"; 
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const Header = () => {
  const route = useRouter(true);
  return (
    <nav className="bg-slate-700 py-4 w-full">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex w-11 items-center mx-5">
              <img src="/image/logo.png" alt="logo" />
            </div>
            <div>
              <ul className="flex items-center">
                <li className="mr-6">
                  <a
                    href="http://localhost:3000/"
                    className=" text-white hover:bg-blue-400"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="http://localhost:3000/About"
                    className=" text-white hover:bg-blue-200"
                  >
                    About
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="http://localhost:3000/Contact"
                    className=" text-white hover:bg-blue-200"
                  >
                    Contact
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className=" text-white hover:bg-blue-200">
                    Bookings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              onClick={() => route.push("http://localhost:3000")}
              className="bg-gray-900 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3"
            >
              Booking A Taxi
            </button>

            <button className="bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5">
              Free Ride
            </button>
            <MenuIcon className="ml-5 text-white cursor-pointer text-3xl " />

            <button className="ml-5 text-white cursor-pointer text-3xl  items-center my-5">
              <UserButton />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
