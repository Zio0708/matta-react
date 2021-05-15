import React, { createContext, useState } from 'react';

const UserContext = createContext({
    state: { userName: 'default'},
    actions: {
        setUserName: () => {}
    }
});

const UserProvider = ({ children }) => {
    const[userName, setUserName] = useState('default');

    const userValue = { 
        state: { userName },
        actions: { setUserName }
    };
    return (
        <UserContext.Provider userValue={userValue}>{children}</UserContext.Provider>
    );

};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;