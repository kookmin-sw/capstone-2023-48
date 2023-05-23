import '../mainContent.style.css';
import './member.style.css';
import UserCard from './userCard.component';
import React, { useState, useEffect, useContext } from 'react';
import { searchByEmail } from '../../../action/search-action';
import { ProjectContext } from '../../../contexts/project.context';

//검색 결과 테스트 데이터
const Member = (props) =>{
  const {zIndex} = props;
  const [searchId, setSearchId] = useState(''); //searchId 유저에게 input으로 받은 값(이메일)
  const [searchResult, setSearchResult] = useState([]);//초기값 테스트 데이터
  const { currentProject } = useContext(ProjectContext);

  const handleChange = async (e) => {
    const { value } = e.target;
    if (value) {
        const result = await searchByEmail(value);
        if (result.data.length) {
            setSearchResult(result.data.map((e) => ({ name: e.name, email: e.id, id: e._id})));
        }
    }
    setSearchId(value);
  }

  return(
  <div className='main-content-wrapper member-wrapper' opacity={{zIndex}}>
    <div className='search-bar-container'>
      <input className='search-bar' placeholder='이메일로 친구를 검색해보세요' value={searchId} onChange={handleChange}/>
    </div>
    <div className='search-result'>
      {searchResult.map((user) => (<UserCard key={user._id} user={user} project={currentProject}/>))}
    </div>
  </div>
  )
}
export default Member;