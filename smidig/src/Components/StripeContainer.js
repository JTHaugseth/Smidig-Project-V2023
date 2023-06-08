import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_live_51NGdW9I01YhOsco0uc0fDmrbLffXGiVfvpLuazoDE2A6K9aRskpUHbeMKfbjdHGL2LHCQLmi8O0Bqh3GymdYCRrI00PnpyPXwo');

const Stripe = () => {
    return (
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    );
  };

  export default Stripe;

