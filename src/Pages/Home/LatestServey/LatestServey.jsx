// import React from 'react';

// import { useEffect } from "react";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
// import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useSurvey from "../../../hooks/useSurvey";

const LatestServey = () => {
const[servey]= useSurvey();
//     useEffect(()=>{
//         fetch('servey.json')
//         .then(res => res.json())
//         .then(data =>{
// setServey(data)
//         })
//     },[])
    return (
       <section>
        <SectionTitle
        heading={"Latest Surveys"}
        subHeading={"Here all recently survay"}
        ></SectionTitle>
       <div className="grid md:grid-cols-3 gap-4 items-center mx-20">
        {
            servey.slice(0,6) .sort((a, b) => new Date(b.date) - new Date(a.date)).map(item =><MenuItem key={item._id}
            item={item}
            ></MenuItem> )
        }
       </div>
       </section>
    );
};

export default LatestServey;