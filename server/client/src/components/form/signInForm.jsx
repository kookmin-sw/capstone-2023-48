import SignInButton from '../button/signInButton'
import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/signInForm.style.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  //Manage user's email and password by useState()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //when user enter email or password field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  }

  return (
    <form className='sign-in-form'>
      <h2>로그인 하세요!</h2>
      <input placeholder="이메일" type="email" name="email" required onChange={handleChange} value={email}/>
      <input placeholder="비밀번호" type="password" name="password" required onChange={handleChange} value={password}/>
      <SignInButton/>
      <p>회원이 아니신가요? <Link className="sign-up-link" to='/sign-up'>
            회원가입
      </Link></p>
    </form>
  );
};

export default SignInForm;
