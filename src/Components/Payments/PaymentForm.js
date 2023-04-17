import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51MttfyIAByes5dbfqsRJJPTlq10IkpubwkEwXxtSzdKTxc8kA90bI0sVszBoIx5M3IQGlsAjCemL7LuwuHiJMIzU008VF4VPKr");

export default function PaymentForm() {
  const [clientSecret, setClientSecret] = useState("");
  const donationAmount = 10;

  useEffect(() => {
    console.log('creating payment intent...');
    fetch("/create-payment-intent/", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ amount: donationAmount }),
    })
      .then((res) => {
        console.log('received response:', res);
        return res.json();
      })
      .then((data) => {
        console.log('received data:', data);
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.log('error creating payment intent:', error);
      });
  }, [donationAmount]);

  return (
    <div className="App">
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} donationAmount={donationAmount} />
        </Elements>
      )}
    </div>
  );
}
