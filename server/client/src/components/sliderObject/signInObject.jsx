import SignInForm from '../form/signInForm'

const SignInObject = () => {

  return(
    <div className="sign-in">
      <div className="sign-in-left">
        <h1 className='introduction'>WE ARE GOING TO.</h1>
      </div>
      <div className="sign-in-right">
        <SignInForm />
      </div>
    </div>
  )

};


export default SignInObject;