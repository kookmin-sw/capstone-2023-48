//Navigation for all pages except the login Page
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { ReactComponent as TripLogo } from '../../assets/images/navgaition_logo.png';
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
  
  const {currentUser} = useContext(UserContext); 

  return(
    <div className='navigation'>
      <Link className="logo-container" to='/'>
        <img src='../../assets/images/navgaition_logo.png' alt='nav_logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/projectList'>
          내 프로젝트
        </Link>
        <Link className='nav-link' to='/myPage'>
          마이페이지
        </Link>
        {currentUser ? (
          <span>로그아웃</span>
        ) : (<div></div>)}
      </div>
    </div>
  );
};

export default Navigation