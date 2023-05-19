import React from 'react';
// import './sign-un-Button.style.scss'

const SignUpButton = (props) => {
    const { onClickButton } = props;
  return (
    <button onClick={onClickButton} className="custom-button sign-in-button">
        회원가입
    </button>
  );
};

export default SignUpButton;