import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import './user-info.style.css';
import React from 'react';

const UserInfo = () => {

  const { displayUserName } = useContext(UserContext);

  return(
    <div className="user-profile-container">
      <img src='client/src/components/form' alt="유저이미지"/>
      <p className="user-profile-email">{displayUserName}</p>
      <p className="user-profile-phoneNumber">phoneNumber</p>
    </div>
  )
};

export default UserInfo;