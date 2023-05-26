import React from 'react';
import './chatting-form.style.css';
import {ProjectContext} from '../../contexts/project.context';
import {useContext, useState, useEffect} from 'react';
import {UserContext} from "../../contexts/user.context";
import {createChatting} from "../../action/project-action";

const ChattingForm = (props) => {
    const {currentProject, setRefresh} = props;
    const {currentUser} = useContext(UserContext)
    const onClickChattingButton = async () => {
        const response = await createChatting(currentProject._id, message, currentUser.email);
        if (response.data.success) {
            setRefresh();
            setMessage('');
        }
    }
    const [message, setMessage] = useState('');
    return (
        <div className="chatting-form-wrapper">
            <div className='chatting-header'>
                {currentProject && currentProject.title}
            </div>
            <div className='chatting-member'>
                {currentProject.displayName.length > 5 && currentProject.displayName.slice(0, 5).join(',')}
                {currentProject.displayName.length > 5 && '+'}
                {currentProject.displayName.length <= 5 && currentProject.displayName.join(',')}
            </div>
            <div className='chatting-body'>
                {currentProject.chat && currentProject.chat.map((e) => {
                    return (
                        <div className='chatting-container'>
                            <div className='chatting-name'>{e.name}</div>
                            <div className='chatting-message'>{e.message}</div>
                        </div>
                    )
                })}
            </div>
            <div className='chatting-input'>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <div className='chatting-button' onClick={() => onClickChattingButton()}>등록</div>
            </div>
        </div>
    )
}

export default ChattingForm;