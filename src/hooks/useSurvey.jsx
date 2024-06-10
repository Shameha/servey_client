// import React from 'react';

import { useEffect, useState } from "react";

const useSurvey = () => {
    const[servey,setServey]= useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://assignment12-server-theta.vercel.app/servey')
        .then(res => res.json())
        .then(data =>{
setServey(data);
setLoading(false)
        })
    },[])
return [servey,loading]
}

export default useSurvey;