import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function CheckoutForm({ clientSecret, donationAmount }) {
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "John Doe",
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
      setSucceeded(false);
    } else {
      setError(null);
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="card-element">
          Credit or debit card
        </label>
        <div id="card-element">
          <CardElement />
        </div>

        {error && <div className="error">{error}</div>}

        {succeeded && (
          <div className="success-message">
            Payment succeeded, thank you for your donation!
          </div>
        )}
      </div>

      <button type="submit">Pay</button>
    </form>
  );
}
