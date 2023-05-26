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

//수정
export async function getProject(projectId){
    const response = await api.get(`/projects/project/${projectId}`);
    return response;
}

export async function createProject(args) {
    const response = await api.post(`/projects`, args);
    return response;
}

//detail에서 invite버튼 눌렀을때 해당 프로젝트 _id, 초대받은 유저의 email args로 받아 post
export async function addMemberToProject(projectId, memberId){
    console.log('@');
    console.log(projectId);
    console.log(memberId);
    const response = await api.post(`/projects/member`, {
        projectId,
        memberId,
    });
    return response; //멤버가 추가되어 업데이트된 프로젝트 데이터를 response
}

export async function updatePlaces(args){
    const response = await api.post(`/projects/places`, args);
    return response;
}

export async function createChatting(projectId, message, email) {
    const response = await api.post(`projects/chatting/${projectId}`, { message, email });
    return response;
}