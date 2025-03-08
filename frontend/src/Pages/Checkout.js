import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51Qtx7t8ObxLGDwcdB8CwVScVZA8XOjdZBtHryeak8lXk1p6aZRAGgeKhIhwCEGCNv0lBuvJU98iOnnlITZS44fQ700NI5XPvj1");

const Checkout = ({ ctotal, currentUser, cartItems, restaurantId }) => {

  if (!restaurantId) {
    console.error("❌ ERROR: restaurantId is undefined! Check cartItems:", cartItems);
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm 
        amount={ctotal} 
        currentUser={currentUser} 
        cartItems={cartItems} 
        restaurantId={restaurantId} 
      />
    </Elements>
  );
};


export default Checkout;