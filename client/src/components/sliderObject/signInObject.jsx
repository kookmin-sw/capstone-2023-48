import SignInForm from '../form/signInForm'

const SignInObject = () => {

  return(
    <div className="sign-in">
      <div className="sign-in-left">
        <h1 className='introduction'>친구들을 초대하고 여행을 계획하세요.</h1>
      </div>
      <div className="sign-in-right">
        <SignInForm />
      </div>
    </div>
  )

};


export default SignInObject;