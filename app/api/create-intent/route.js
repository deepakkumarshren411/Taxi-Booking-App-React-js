import { loadStripe } from "@stripe/stripe-js";
import { NextResponse } from "next/server";

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const data = await request.json();
  const amount = data.amount;

  try {
    const stripe = await stripePromise;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "INR",
    });

    return new NextResponse.JSON(paymentIntent.client_secret, { status: 200 });
  } catch (e) {
    return new NextResponse(e, {
      status: 400,
    });
  }
}
