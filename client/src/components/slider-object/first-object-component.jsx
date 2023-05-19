import SignInForm from "../sign-in-form/sign-in-form.component";
import './first-object.style.scss';
const FirstObject = () => {
  
  return(
    <div className="first-object">
      <div className="sign-in-wrapper">
        <div className="sign-in-left">
          <h1 className='introduction'>친구를 초대하고</h1>
          <h1 className='introduction'>여행을 계획하세요</h1>
          <SignInForm />
        </div>
        <div className="sign-in-right">
          <div className="sign-in-earth"/>
        </div>
      </div>
      <span>Scroll ↓</span>
      <div className="scroll">Scroll ↓</div>
    </div>
  )
};

export default FirstObject;