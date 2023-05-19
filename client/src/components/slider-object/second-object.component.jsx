import React from 'react';
import './second-object.style.css';

const SecondObject = () => {
  return(
    <div className="second-object">
      <div className='intro-card-container'>
        <div className='intro-card first-card'>
          <div className='intro-card-img thrid-img'>

          </div>
          <div className='card-subject first-subject'>
            <h1>프로젝트를 생성하세요</h1>
            <p>여행을 갈때마다 프로젝트를 생성하고 계획하세요. 지나간 여행들도 돌아볼수 있습니다!</p>
          </div>
        </div>
        <div className='intro-card second-card'>
          <div className='intro-card-img thrid-img'>

          </div>
          <div className='card-subject second-subject'>
            <h1>검색하고 추가하세요</h1>
            <p>가고싶은 곳을 검색하고 일정에 추가하세요. 추가된 일정은 모든 멤버에게 적용됩니다!</p>
          </div>
        </div>
        <div className='intro-card third-card'>
          <div className='intro-card-img thrid-img'>

          </div>
          <div className='card-subject second-subject'>
            <h1>친구를 초대하세요</h1>
            <p>이메일로 친구를 찾아 초대하세요. 언제나 친구를 초대할 수 있습니다!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondObject;