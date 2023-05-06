import './chatting-form.style.scss';

const ChattingForm = () => {
  return(
    <div className="chatting-form-wrapper">
      <div className='chatting-header'>        
        <p className='chatting-header-title'>CHATTING CHANNEL</p>
        <p>참여자들 :</p>
      </div>
      <div className='chatting-body'>
        <div className='chatting'>
          채팅내역
        </div>
      </div>
    </div>
  )
}

export default ChattingForm;