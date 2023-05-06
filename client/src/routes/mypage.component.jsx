import UserProfileForm from "../components/user-profile-form/user-profile-form.component";
import UserInfo from "../components/user-info/user-Info.component";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";
import './mypage.style.scss';

const Mypage = () => {
  const {currentUser} = useContext(UserContext); 
  console.log(currentUser)
  return (
    <div className="mypage-wrapper">
      <UserInfo/>
      <UserProfileForm/>
    </div>
  );
};

export default Mypage;
