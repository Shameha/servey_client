// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { SiLinuxserver } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
       const res = await axiosSecure.get('/users')
       return res.data;
        }
    })

const handleMakeAdminAndSurvey = user =>{

axiosSecure.patch(`/users/admin/${user._id}`)
.then(res=>{
    console.log(res.data);
    if(res.data.modifiedCount >0){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})

}

    const  handleDelete = user =>{
//   console.log(user);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
  axiosSecure.delete(`/users/${user._id}`)
  .then(res =>{
    if(res.data.deletedCount >0){
        refetch();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  })
    }
  });
    }
    return (
        <div >
        <div className="flex justify-evenly my-4">
        <h1 className="text-3xl">here all users</h1>         
        <h1 className="text-3xl">Total users{users.length}</h1>         
        </div>
        <div className="overflow-x-auto w-full">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Admin Role</th>
        <th>Survey Role</th>
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
       {/* admin */}
        <td>
       {user.role === 'admin' ? 'Admin': <button onClick={()=> handleMakeAdminAndSurvey(user)} className="btn btn-primary"><IoPeopleOutline /></button> }
        </td>
        {/* survay */}
        <td>
        {user.role === 'survey'?'Survey':<button onClick={()=> handleMakeAdminAndSurvey(user)} className="btn btn-secondary"><SiLinuxserver /></button>}
        </td>
        <td>
        <button onClick={()=>handleDelete(user)} className="btn btn-accent">Delete</button>
        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>

    );
};

export default AllUsers;