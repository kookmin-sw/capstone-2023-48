import React from 'react';
import './user-profile-form.style.css';

const UserProfileForm = () => {

  return(
    <div className="reset-form">
      <label>이메일 재설정</label>
      <input className="email-reset-input" placeholder="이메일"/>
      <label>비밀번호 재설정</label>
      <input className="password-reset-input" placeholder="비밀번호"/>
      <label>전화번호 재설정</label>
      <input className="phoneNum-reset-input" placeholder="전화번호"/>
    </div>
  )
};

export default UserProfileForm;