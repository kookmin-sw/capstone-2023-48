import { useState } from 'react';
import SignUpButton from '../button/signupButton';
import axios from 'axios';
import {registerUser} from "../../action/user-action";
import {useNavigate} from "react-router-dom";

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword:'',
  phoneNumber:'',
};

const SignUpForm = () => {
  const history = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email,password,confirmPassword,phoneNumber,userName } = formFields;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name] : value});
    console.log({formFields});
  }

  const handleSubmit = async (e) => {
    console.log('비밀번호 일치 X 확인')
    console.log('!');
    //when password and confirmPassword are diffrent
    if (password !== confirmPassword){
      alert('비밀번호가 일치하지 않습니다')
      e.preventDefault();
    }
    else {
      //send user data to server
      await registerUser({
        email,
        password,
        phoneNumber,
        userName,
      }).then((res) => {
        if (res.status === 200) {
          console.log('send data ', formFields );
          history('/');
        }
      }).catch((e) => console.log(e));

    }
  }
  
  return(
    <div className="sign-up-form">
      <h2>회원가입</h2>
      <input placeholder="이메일" type="email" name="email" required onChange={handleChange} value={email}/>
      <input placeholder="비밀번호" type="password" name="password" required onChange={handleChange} value={password}/>
      <input placeholder="비밀번호 확인" type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword}/>
      <input placeholder="휴대폰 번호" type="text" name="phoneNumber" required onChange={handleChange} value={phoneNumber}/>
      <input placeholder="이름" type="text" name="userName" required onChange={handleChange} value={userName}/>
      <SignUpButton onClickButton={() => handleSubmit()}/>
    </div>
  )
}

export default SignUpForm