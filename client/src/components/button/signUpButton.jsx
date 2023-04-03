import { Link } from "react-router-dom";
import '../../assets/styles/signInButton.style.scss'

const SignUpButton = () => {

  return (
    <button type="submit" className="custom-button sign-in-button">
      <Link className="sign-in-link" to='/projectList'>    
        회원가입
      </Link>
    </button>
  );
};

export default SignUpButton;