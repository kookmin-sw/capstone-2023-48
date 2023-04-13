import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";
import ProjectList from "./routes/project-list.component";
import Mypage from "./routes/mypage.component";
import { UserProvider } from "./contexts/user.context";
import MainPage from "./routes/main.component";
import Navigation from "./components/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>   
      <Route path="/sign-up" element={<SignUp/>}/>   
      <Route path="/projectList" element={<ProjectList/>}/>   
      <Route path="/mypage" element={<Mypage/>}/>      
      <Route path="/mainpage" element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
