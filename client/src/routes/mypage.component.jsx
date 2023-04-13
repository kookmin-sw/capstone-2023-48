import UserProfileForm from "../components/user-profile-form/user-profile-form.component";
import Navigation from "../components/navigation/navigation.component";
import UserInfo from "../components/user-info/user-Info.component";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";

const Mypage = () => {
  const {currentUser} = useContext(UserContext); 
  console.log(currentUser)
  return (
    <div>
      <Navigation/>
      <UserInfo/>
      <UserProfileForm/>
    </div>
  );
};

export default Mypage;
