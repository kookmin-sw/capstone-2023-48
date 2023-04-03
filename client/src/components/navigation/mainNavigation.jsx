import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const MainNavigation = () => {
  return(
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          로고
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/projectList'>
            내 프로젝트
          </Link>
          <Link className='nav-link' to='/mypage'>
            마이페이지
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default MainNavigation;