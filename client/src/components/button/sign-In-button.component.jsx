import React from 'react';
import { Link } from "react-router-dom";

const SignInButton = () => {

  return (
    <button className="custom-button sign-in-button">
      <Link className="sign-in-link" to='/projectList'>    
        로그인
      </Link>
    </button>
  );
};

export default SignInButton;