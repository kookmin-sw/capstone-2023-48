import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://localhost:5001/api',
});


//추가버튼을 누르면 해당 장소를 현재 프로젝트의 places에 push
//args = currentProject._id, //현재 프로젝트 id
      // result.name, //여행지 이름
      // result.formatted_address, //여행지 주소
      // result.geometry, //여행지 좌표
      // result.photos, // 여행지 사진 Array (최대 length : 10)
export async function addPlace(args){
  const response = await api.post(`/plans`, args);
  return response;
}

export async function deletePlace(args){
  const response = await api.post(`/plan`)
}
