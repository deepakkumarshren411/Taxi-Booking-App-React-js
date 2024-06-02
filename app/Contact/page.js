"use client";

import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="bg-yellow dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-transparent py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl md:max-w-6xl font-bold text-sky-800">
                Let's collaborate on our upcoming Taxi Booking App
              </h1>
              <p className="text-slate-950">
                In today's fast-paced digital world, we understand the
                importance of providing prompt and effective support to our
                valued customers vel we take pride in offering a seamless
                support experience that's just a click away. <br />
                <br /> Whether you have a question, encounter an issue, or need
                assistance, our dedicated support team is ready to help you
                every step of the way.{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="https://www.linkedin.com/in/deepak-shren-b0185324b/"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
