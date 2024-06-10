// import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('')
const Pay = () => {
    return (
        <div>
           <SectionTitle heading={'payment'} subHeading={"please pay for membership"}></SectionTitle>
          <div>
           <Elements stripe={stripePromise}> 
           
           </Elements>
          </div>
        </div>
    );
};

export default Pay;