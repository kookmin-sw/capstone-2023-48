//Navigation for all pages except the login Page
import { Link } from 'react-router-dom';
import { ReactComponent as TripLogo } from '../assets/images/tripLogo.svg';

const Navigation = () => {
  
  return(
    <div className='navigation'>
      <Link className="logo-container" to='/'>
        <TripLogo className='logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/projectList'>
          내 프로젝트
        </Link>
        <Link className='nav-link' to='/myPage'>
          회원정보
        </Link>
      </div>
    </div>
  );
};

export default Navigation