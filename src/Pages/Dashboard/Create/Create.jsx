// import React from 'react';

import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
// import { FaUtensils } from "react-icons/fa";

const Create = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
    return (
        <div>
            <SectionTitle heading={"Add survey"} subHeading={"here all survay"}>

            </SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input {...register("name")} /> */}
      <label className="form-control w-full my-6">
  <div className="label w-full">
    <span className="label-text">Title</span>
  </div>
  <input type="text" placeholder="Title" {...register("title",{required:true})} className="input input-bordered w-full max-w-xs" />
</label>
<div className="flex gap-6">
    {/* category */}
    
  <div>
  <select defaultValue="default" {...register("category",{required:true})}
       className="select select-bordered w-full">
  <option disabled value="default">select a category</option>
  <option value="phone">Phone</option>
  <option value="internet">Internet</option>
  <option value="technology">Wearable Technology</option>
</select>
  </div>
  <div>
  <select defaultValue="default" {...register("category",{required:true})}
       className="select select-bordered w-full">
  <option disabled value="default">select yor vote</option>
  <option value="Yes">Yes </option>
  <option value="No">No</option>
</select>
  </div>
{/* price */}
<div >
<label className="form-control w-full my-6">
  <div className="label w-full">
    <span className="label-text">Deadline</span>
  </div>
  <input type="date" placeholder="date" {...register("date")} className="input input-bordered w-full max-w-xs" />
</label>
</div>
<div >
<label className="form-control w-full my-6">
  <div className="label w-full">
    <span className="label-text">Votes</span>
  </div>
  <input type="number" placeholder="vote" {...register("vote")} className="input input-bordered w-full max-w-xs" />
</label>
</div>
</div>
<div>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">QNA</span>
  </div>
  <input type="text" {...register("qus")} placeholder="qus" className="input input-bordered w-full max-w-xs" />
</label>
</div>

      
      
      <button className="btn">Add Survey</button>
    </form>
            </div>
        </div>
    );
};

export default Create;