// import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment)
const Pay = () => {
    return (
        <div>
           <SectionTitle heading={'payment'} subHeading={"please pay for membership"}></SectionTitle>
          <div>
           <Elements stripe={stripePromise}> 
          <CheckoutForm>
            
            </CheckoutForm>     
           </Elements>
          </div>
        </div>
    );
};

export default Pay;