import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../assets/images/navigation_logo.png';
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
  
  const {currentUser} = useContext(UserContext); 
  console.log(currentUser)
  
  return(
    <div className='navigation'>
      <Link className="logo-container" to='/'>
        <img src={Logo} alt='nav_logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/projectList'>
          내 프로젝트
        </Link>
        <Link className='nav-link' to='/myPage'>
          마이페이지
        </Link>
        {
          currentUser ? 
            <span>로그아웃</span>
           : null
        }
      </div>
    </div>
  );
};

export default Navigation