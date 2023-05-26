import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://35.78.64.250:5001/api',
});

export async function getUser(userId) {
    const response = await api.get(`/users/${userId}`);
    return response;
}export async function registerUser(args) {
    const response = await api.post('/users', {
        name: args.userName,
        id: args.email,
        password: args.password,
        phone: args.phoneNumber,
    });
    return response;
}

export async function loginUser(args) {
    const response = await api.post('/users/sign_in', {
        id: args.email,
        password: args.password,
    }, {withCredentials: true});
    return response;
}

export async function createNewProject(args){
    const response = await api.post('/users/createNewProject',{
        projectTitle: args.projectTitle,
        startDate: args.startDate,
        endDate: args.endDate,
        user: args.currentUser,
    });
    return response;
}