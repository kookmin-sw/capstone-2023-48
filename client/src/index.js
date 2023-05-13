import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProjectProvider } from './contexts/project.context';
import { DndProvider } from 'react-dnd'

import { useDrag } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ProjectProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ProjectProvider>
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();
