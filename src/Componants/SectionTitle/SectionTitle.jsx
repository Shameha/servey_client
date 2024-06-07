// import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-4xl font-bold mb-2">{heading}</h3>
            <p className="text-xl py-4 ">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;