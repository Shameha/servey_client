// import React from 'react';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import useSurvey from '../../../hooks/useSurvey';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const FeaturedSurveys = () => {
    const[servey]= useSurvey();
    return (
        <section>
        <SectionTitle
        heading={"Featured Surveys"}
        subHeading={"Here all Featured survay"}
        ></SectionTitle>
       <div className="grid md:grid-cols-3 gap-4 items-center mx-20">
        {
            servey.slice(0,6).sort((a, b) => b.votes - a.votes).map(item =><MenuItem key={item._id}
            item={item}
            ></MenuItem> )
        }
       </div>
       </section>
    );
};

export default FeaturedSurveys;