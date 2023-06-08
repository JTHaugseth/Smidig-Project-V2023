import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    return (
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    );
  };

  export default Paymentform;