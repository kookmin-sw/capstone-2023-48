import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ProjectList from "./pages/projectList";
import Mypage from "./pages/mypage";
import { UserProvider } from "./contexts/user.context";
import MainPage from "./pages/mainpage";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn/>}/>   
          <Route path="/sign-up" element={<SignUp/>}/>   
          <Route path="/projectList" element={<ProjectList/>}/>   
          <Route path="/mypage" element={<Mypage/>}/>      
          <Route path="/mainpage" element={<MainPage/>}/>      
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
