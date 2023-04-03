import UserProfile from "./userProfile";

const UserProfileForm = () => {

  return(
    <div className="user-profile-form">
      <UserProfile/>
      <input className="email-reset-input" placeholder="이메일"/>
      <input className="password-reset-input" placeholder="비밀번호"/>
      <input className="phoneNum-reset-input" placeholder="전화번호"/>
    </div>
  )
};

export default UserProfileForm;