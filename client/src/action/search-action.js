//메인페이지의 멤버 초대를 위해 input과 일치하는 모든 user 반환
//ex) input : hyesung1234 , output: hyesung1234,hyesung12345,hyesung12346773

import axios from 'axios';

axios.defaults.withCredentials = true; // withCredentials 전역 설정

export const api = axios.create({
    baseURL: 'http://35.78.64.250:5001/api',
});

//email과 일치하는 모든 user 반환
export async function searchByEmail(email) {
  const response = await api.get(`users/searchByEmail/${email}`)
  return response;
  
  // response예시
  // [
  //   {
  //     "name": "홍길동1",
  //     "email": "user1@naver.com"
  //   },
  //   {
  //     "name": "홍길동2",
  //     "email": "user2@naver.com
  //   }
  // ]
}