import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const latestOrder = async()=>{
    return await axios.get(`${BASE_URL}/orders/latest`, {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}});
}

export const createOrder = async (order)=>{
   return await axios.post(`${BASE_URL}/orders`,order,{headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}});
}

export const deleteOrder = async (id)=>{
    return await axios.delete(`${BASE_URL}/orders/${id}`,{headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}});
}