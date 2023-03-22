import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Main from "./components/main/Main";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ProjectList from "./pages/projectList";
import Mypage from "./pages/mypage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>   
        <Route path="/signUp" element={<SignUp/>}/>   
        <Route path="/projectList" element={<ProjectList/>}/>   
        <Route path="/mypage" element={<Mypage/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
