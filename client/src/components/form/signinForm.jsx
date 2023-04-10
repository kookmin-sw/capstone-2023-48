import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/signinForm.style.scss';
import axios from 'axios';
import {loginUser} from "../../action/user-action";

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  
  //Manage user's email and password by useState()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [loginError, setLoginError] = useState('');

  //when user enter email or password field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  }

  const handleSubmit = async(e) => {

    console.log("handleSubmit")

    e.preventDefault();

    //response user's email and pwd
    await loginUser({
      email,
      password,
    }).then((response) =>{
      console.log(response.data);
      if (response.data.success === true){
        //success sign in -> move to projectList
        console.log(response.data);
        console.log("login success");
        window.location.replace("/projectList");
      }
      else{
        //failed login
        alert("이메일 또는 비밀번호가 올바르지 않습니다");
        console.log("login fail");
      }
    })
  }

  return (
    <form className='sign-in-form' onSubmit={handleSubmit}>
      <h2>로그인 하세요!</h2>
      <input placeholder="이메일" type="email" name="email" required onChange={handleChange} value={email}/>
      <input placeholder="비밀번호" type="password" name="password" required onChange={handleChange} value={password}/>
      <button className="custom-button sign-in-button">
        로그인
      </button>
      {loginError && <div className='login-error'>{loginError}</div>}
      <p>회원이 아니신가요? 
        <Link className="sign-up-link" to='/sign-up'>
          회원가입
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
