import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://localhost:5001/api',
});

export async function addPlace(args){
  const response = await api.post(`/plan`, args);
  return response;
}
