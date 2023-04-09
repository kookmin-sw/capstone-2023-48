import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://localhost:5001/api',
});

export async function registerUser(args) {
    const response = await api.post('/users', args);
    return response;
}

export async function loginUser(args) {
    const response = await api.post('/users/sign_in',
        args, {withCredentials: true});
    return response;
}