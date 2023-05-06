import {React, useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './sign-in-form.style.scss';
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
    
    console.log("handleSubmit")

    e.preventDefault();

    //response user's email and pwd
    await loginUser({
      email,
      password,
    }).then((response) =>{
      console.log(response);
      if (response.data.success === true){
        //success sign in -> move to projectList
        setCurrentUser(formFields);
        setDisplayUserName(formFields.email.substring(0, email.indexOf("@")));
        navigate('/projectList')
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
      <button class="custom-btn sign-in-btn">
        <span>로그인</span>
      </button>
      <p>회원이 아니신가요? 
        <Link className="sign-up-link" to='/sign-up'>
          회원가입
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
