import '../mainContent.style.css';
import './member.style.css';
import UserCard from './userCard.component';
import React, { useState, useEffect } from 'react';
import { searchByEmail } from '../../../action/search-action';

//검색 결과 테스트 데이터
const Member = (props) =>{
  const {zIndex} = props;
  const [searchId, setSearchId] = useState(''); //searchId 유저에게 input으로 받은 값(이메일)
  const [searchResult, setSearchResult] = useState([]);//초기값 테스트 데이터
  
  //change생길때마다 searchId업데이트
  const handleChange = async (e) => {
    const { value } = e.target;
    if (value) {
        const result = await searchByEmail(value);
        if (result.data.length) {
            console.log(result.data);
            setSearchResult(result.data.map((e) => ({ name: e.name, email: e.id, id: e._id})));

        }
    }
    setSearchId(value);
  }

  //입력이 바뀔때마다 입력+ 유저 정보 get => state에 result 저장 => render
  //searcId가 test라면 이메일이 test로 시작하는 모든 유저 출력 test1,test12,test993...
  useEffect(() => {

    //구현 안돼서 일단 막아 놓음 args는 유저에게 입력받은 값 (이메일)
  // useEffect(async() => {
    // await searchByEmail(searchId).then((response) => {
    // setSearchResult(response.data);
    // });
    
  },[searchId])

  return(
  <div className='main-content-wrapper member-wrapper' opacity={{zIndex}}>
    <div className='search-bar-container'>
      <input className='search-bar' placeholder='이메일로 친구를 검색해보세요' value={searchId} onChange={handleChange}/>
    </div>
    <div className='search-result'>
      {searchResult.map((user) => (<UserCard key={user._id} user={user}/>))}
    </div>
  </div>
  )
}
export default Member;