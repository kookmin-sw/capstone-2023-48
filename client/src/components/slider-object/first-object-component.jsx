import SignInForm from "../sign-in-form/sign-in-form.component";
import './first-object.style.scss';
import  ReactPlayer  from  'react-player/youtube'
const FirstObject = () => {

  return(
    <div className="first-object">
      <div className="sign-in-wrapper">
        <div className="sign-in-left">
          <h1 className='introduction'>Hello, Friend!</h1>
        </div>
        <div className="sign-in-right">
          <SignInForm />
        </div>
      </div>
    </div>
  )

};


export default FirstObject;