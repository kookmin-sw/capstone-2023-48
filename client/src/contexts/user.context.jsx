import { createContext, useState } from 'react'

//actual value want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  setDisplayUserName: () => null,
  currentUser: null,
  displayUserName : null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [displayUserName, setDisplayUserName] = useState(null);
  
  const value = {
    setCurrentUser,
    setDisplayUserName,
    currentUser,
    displayUserName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
