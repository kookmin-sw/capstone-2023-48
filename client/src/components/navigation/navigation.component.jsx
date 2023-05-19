import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import './navigation.style.css';

//Navigation for all pages
const Navigation = () => {
  
  const {currentUser} = useContext(UserContext); 
  const {displayUserName} = useContext(UserContext); 

  return(
    <div className='navigation'>
      <Link className="logo-container" to='/'>
        <h1>WAGO</h1>
      </Link>
      <div className='nav-links-container'>
        {
          currentUser ? 
          <Link className='nav-link' to='/projectList'>
            내 프로젝트
          </Link>
          :null
        }
        {
          currentUser ? 
          <Link className='nav-link' to='/myPage'>
            마이페이지
          </Link>
          :null
        }
        {
          currentUser ? 
            <span className='nav-link'>{displayUserName}</span>
           : null
        }
      </div>
      <Outlet/>
    </div>
  );
};

export default Navigation