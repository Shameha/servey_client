// import React from 'react';
import { LuVote } from "react-icons/lu";


const MenuItem = ({item}) => {
    const {title,short_description,category,votes,date} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <figure className="px-10 pt-10">
          {/* <img src={image} alt="Shoes" className="rounded-xl" /> */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          <p>{short_description}</p>
          <p>Date:{date}</p>
<div className="flex gap-4">
<LuVote />
          <p>total votes:{votes}</p>
</div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;