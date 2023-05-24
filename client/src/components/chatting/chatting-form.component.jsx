import React from 'react';
import './chatting-form.style.css';
import { ProjectContext } from '../../contexts/project.context';
import { useContext,useState,useEffect } from 'react';

const ChattingForm = (props) => {
  const { currentProject } = props;
  return(
    <div className="chatting-form-wrapper">
      <div className='chatting-header'>
       {currentProject && currentProject.title}
      </div>
      <div className='chatting-member'>
        {currentProject.displayName.length > 5 && currentProject.displayName.slice(0,5).join(',')}
        {currentProject.displayName.length > 5 && '+'}
        {currentProject.displayName.length <= 5 && currentProject.displayName.join(',')}
      </div>
      <div className='chatting-body'>
      </div>
      <div className='chatting-input'></div>
    </div>
  )
}

export default ChattingForm;