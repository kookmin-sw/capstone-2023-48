import './sideBar.style.scss';
import { useState } from 'react';
import { ReactComponent as MainLogo} from '../../assets/logos/plane.logo.svg';
import { ReactComponent as CalendarLogo} from '../../assets/logos/calendar.logo.svg';
import { ReactComponent as MemberLogo} from '../../assets/logos/member.logo.svg';

const SideBar = ({handleActiveComponentChange}) => {


  return(
		<div className='side-bar-container'>
			<ul className='side-bar-list'>	
				<li className='side-bar-item' onClick={() => handleActiveComponentChange('home')}>
					<MainLogo width="50px" height="50px"/>
					홈
				</li>
				<li className='side-bar-item' onClick={() => handleActiveComponentChange('detail')}>
					<CalendarLogo width="50px" height="50px"/>
					상세일정
				</li>
				<li className='side-bar-item' onClick={() => handleActiveComponentChange('member')}>
					<MemberLogo width="50px" height="50px"/>
					멤버
				</li>
			</ul>
		</div>
  )
}

export default SideBar;