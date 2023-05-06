import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://localhost:5001/api',
});

export async function getProjectList(userId) {
    const response = await api.get(`/projects/${userId}`);
    return response;
}

export async function createProject(args) {
    const response = await api.post(`/projects`, args);
    return response;
}