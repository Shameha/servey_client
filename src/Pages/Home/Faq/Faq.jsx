// import React from 'react';

import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";



const Faq = () => {
    const[reviews,setReviews]= useState([]);
    useEffect(()=>{
    
fetch('reviews.json')
.then(res=> res.json())
.then(data =>setReviews(data))

    },[])
    return (
        <section className="my-20">
            <SectionTitle heading={"frequently asked question"}
            subHeading={" question in a list of questions and answers intended to help people understand a particular subject"}
            >
                
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review =><SwiperSlide
            
            key={review._id}>
                <div className="m-24">
                    <h2 className="text 2xl">{review.question}</h2>
                    <p>{review.answer}</p>
                </div>

            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Faq;