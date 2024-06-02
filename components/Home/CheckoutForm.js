"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { useRouter } from "next/navigation";

function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (elements == null) {
        return;
      }
      const { error: submitError } = await elements.submit();
      if (submitError) {
        return;
      }

      const res = await fetch("/api/create-intent", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
        }),
      });

      const secretKey = await res.json();
      console.log(secretKey);

      const { error } = await stripe.confirmPayment({
        clientSecret: secretKey,
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
      });
      router.push("http://localhost:3000/payment-confirm");
    } catch (error) {
      router.push("http://localhost:3000/payment-confirm");

      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-6">
      <h2 className="m-5 font-bold">
        Amount to Pay: <span>&#8377;</span> {amount}
      </h2>
      <button className="flex text-center border-collapse bg-green-400 rounded-2xl p-2 mt-2 hover:border-l-amber-600 w-{80px}">
        Cash On Delivery
      </button>
      <form onSubmit={handleSubmit} className="max-w-md">
        <PaymentElement />

        <button
          className="w-full
            bg-black text-white p-2 rounded-lg mt-2"
        >
          Pay now
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
