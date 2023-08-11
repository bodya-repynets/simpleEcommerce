import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  const products = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.title,
              images: [item.product.image],
            },
            unit_amount: item.product.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.amount,
        };
      }),
      mode: "payment",
      success_url: `https://simple-ecommerce-website.vercel.app/?success=true`,
      cancel_url: `https://simple-ecommerce-website.vercel.app/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
