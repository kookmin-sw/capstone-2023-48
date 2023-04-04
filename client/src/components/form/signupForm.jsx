import { useState } from 'react';
import SignUpButton from '../button/signupButton';
import axios from 'axios';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword:'',
  phoneNumber:'',
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email,password,confirmPassword,phoneNumber,userName } = formFields;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name] : value});
    console.log({formFields});
  }

  const handleSubmit = async (e) => {
    console.log('비밀번호 일치 X 확인')
    //when password and confirmPassword are diffrent
    if(password !== confirmPassword){
      console.log('비밀번호 일치 X')
      alert('비밀번호가 일치하지 않습니다')
      e.preventDefault();
    }
    else{      
    
      //send user data to server
      const response = await axios.post('/sign-up',{
        email,
        password,
        phoneNumber,
        userName,
      });      
      //history.push('/projectList');
    }
  }
  
  return(
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input placeholder="이메일" type="email" name="email" required onChange={handleChange} value={email}/>
      <input placeholder="비밀번호" type="password" name="password" required onChange={handleChange} value={password}/>
      <input placeholder="비밀번호 확인" type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword}/>
      <input placeholder="휴대폰 번호" type="text" name="phoneNumber" required onChange={handleChange} value={phoneNumber}/>
      <input placeholder="이름" type="text" name="userName" required onChange={handleChange} value={userName}/>
      <SignUpButton/>
    </form>
  )
}

export default SignUpForm