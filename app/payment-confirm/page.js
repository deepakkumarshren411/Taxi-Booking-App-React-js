"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function PaymentConfirmation() {
  const route = useRouter();
  return (
    <div
      className="bg-[#f1f1f1] flex
    h-screen
    items-center justify-center flex-col"
    >
      <h2 className="text-[30px] z-20 mt-[-30px]">Payment Confimed</h2>
      <Image
        src="/image/uberconfirm.gif"
        width={500}
        height={150}
        className="object-cover mt-[-60px]"
      />
      <h2
        className="font-bold 
        text-[23px] mt-[-20px] mb-10"
      >
        Taxi is Booked Successfully
      </h2>
      <button
        className="p-2 bg-black text-white
        px-10 rounded-lg"
        onClick={() => route.push("http://localhost:3000/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default PaymentConfirmation;
