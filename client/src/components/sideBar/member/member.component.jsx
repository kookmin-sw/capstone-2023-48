import '../mainContent.style.scss';
import './member.style.scss';
import UserCard from './userCard.component';
import { useState, useEffect } from 'react';
import { searchByEmail } from '../../../action/search-action';

const test_search_result = 
  [
    {
      "name": "홍길동1",
      "email": "user1@naver.com"
    },
    {
      "name": "홍길동2",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동3",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동4",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동5",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동6",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동4",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동5",
      "email": "user2@naver.com"
    },
    {
      "name": "홍길동6",
      "email": "user2@naver.com"
    }
  ]


const Member = () =>{

  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(test_search_result);
  const handleChange = (e) => {
    const {value} = e.target;
    setSearchId(value);
  }

  //입력이 바뀔때마다 입력+ 유저 정보 get => state에 result 저장 => render
  useEffect(() => {
  // useEffect(async() => {
    // await searchByEmail(searchId).then((response) => {
    // setSearchResult(response.data);
    // });
    
  },[searchId])

  return(
  <div className='main-content-wrapper member-wrapper'>
    <div className='search-bar-container'>
      <input className='search-bar' placeholder='이메일로 친구를 검색해보세요' value={searchId} onChange={handleChange}/>
    </div>
    <div className='search-result'>
      {console.log(test_search_result)}
      {test_search_result.map((user) => (<UserCard key={user.email} user={user}/>))}
    </div>
  </div>
  )
}
export default Member;