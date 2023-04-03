import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import '../../assets/styles/signInNavigation.style.scss'

const SignInNavigation = () => {
  return(
    <Fragment>
      <div className='sign-in-navigation'>
        <Link className='logo-container' to='/'>
          로고
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            로그인
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

export default SignInNavigation