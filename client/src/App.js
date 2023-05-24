import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./routes/landing.component";
import SignUp from "./routes/sign-up.component";
import ProjectList from "./routes/project-list.component";
import Mypage from "./routes/mypage.component";
import MainPage from "./routes/main.component";
import Navigation from "./components/navigation/navigation.component";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Landing/>}/>   
        <Route path="sign-up" element={<SignUp/>}/>   
        <Route path="projectList" element={<ProjectList/>}/>
        <Route path="mypage" element={<Mypage/>}/>      
        <Route path="mainpage/:projectId" element={<MainPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
