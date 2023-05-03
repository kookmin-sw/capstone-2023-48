import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProjectProvider } from './contexts/project.context';
import { NavermapsProvider } from 'react-naver-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavermapsProvider ncpClientId='btdlu526am'>
        <UserProvider>
          <ProjectProvider>
            <App /> 
          </ProjectProvider>
        </UserProvider>
      </NavermapsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
