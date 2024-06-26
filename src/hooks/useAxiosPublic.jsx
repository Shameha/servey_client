// import React from 'react';

import axios from "axios";

const axiosPublic = axios.create({
     baseURL: 'https://b9a12-server-side-shameha.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;