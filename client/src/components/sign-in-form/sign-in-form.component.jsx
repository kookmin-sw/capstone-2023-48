import React, { useState, useContext} from 'react';
import './sign-in-form.style.css';
import {loginUser} from "../../action/user-action";
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const navigate = useNavigate();
  //Manage user's email and password by useState()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //take currentUser data from context
  const { setCurrentUser } = useContext(UserContext);
  const { setDisplayUserName } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  //when user enter email or password field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  }
 
  //when user click login button
  const handleSubmit = async(e) => {

    e.preventDefault();

    //response user's email and pwd
    await loginUser({
      email,
      password,
    }).then((response) =>{
      
      if (response.data.success === true){
        //success sign in -> move to projectList
        setCurrentUser(formFields);
        // setDisplayUserName(formFields.email.substring(0, email.indexOf("@")));
        navigate('/projectList')
      }
      else{
        //failed login
        alert("이메일 또는 비밀번호가 올바르지 않습니다");
        console.log("login fail");
      }
    })
  }

  const handleSignUp = () => {
    navigate('/sign-up')
  }

  return (
    <div className='sign-in-form' >
      <input className='sign-in-input' placeholder="email" type="email" name="email" required onChange={handleChange} value={email}/>
      <input  className='sign-in-input' placeholder="password" type="password" name="password" required onChange={handleChange} value={password}/>
      <div className='sign-in-btn-container'>
        <button className="landing-btn sign-in-btn" onClick={handleSubmit}>
          로그인
        </button>
        <div className='landing-btn-divider'></div>
        <button className="landing-btn" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
