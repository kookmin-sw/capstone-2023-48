import './userCard.style.scss';

const UserCard = (props) => {

  const { user } = props;

  const handleInvite = (email) => {
    console.log(email);
  }

  return(
    <div className="user-card">
      <div className='user-card-name-email'>
        <div className='user-card-name'>{user.name}</div>
        <div className='user-card-email'>{user.email}</div>
      </div>
      <button className='user-card-invite-btn' onClick={handleInvite(user.email)}>초대</button>
    </div>
  )
}

export default UserCard;
