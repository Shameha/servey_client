// import React from 'react';
import { LuVote } from "react-icons/lu";
import { Link } from "react-router-dom";


const MenuItem = ({item}) => {
    const {title,category,votes,date,_id} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <figure className="px-10 pt-10">
          {/* <img src={image} alt="Shoes" className="rounded-xl" /> */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          {/* <p>{description}</p> */}
          <p>Date:{date}</p>
<div className="flex gap-4">
<LuVote />
          <p>total votes:{votes}</p>
</div>
          <div className="card-actions">
           <Link to={`/checkout/${_id}`}><button className="btn btn-primary">View</button></Link>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;