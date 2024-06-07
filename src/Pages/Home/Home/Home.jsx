// import React from 'react';

import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Faq from "../Faq/Faq";
import LatestServey from "../LatestServey/LatestServey";
import FeaturedSurveys from "../FeaturedSurveys/FeaturedSurveys";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
    // const serve = useLoaderData();
    return (
        <div>
            {/* banner section */}
            <Helmet><title>SurveySleuth | Home</title></Helmet>
            <div className="mt-4 mb-4"><Banner></Banner></div>
            <FeaturedSurveys></FeaturedSurveys>
            <LatestServey></LatestServey>
            <Faq></Faq>
        
        
        </div>
    );
};

export default Home;