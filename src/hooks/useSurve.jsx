// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSurve = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:isServey} = useQuery({
        queryKey:[user?.email,'isServey'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/survey/${user.email}`)
          console.log(res.data);
            return res.data?.survey;
        }
    })
    return [isServey]
};

export default useSurve;
