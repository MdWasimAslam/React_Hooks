import React from 'react';
import { createContext } from "react";
import "./styles.css";

const LoginContext = createContext();


const UseContextHook = () => {
    return (
        <>
            <h1 className='h1Text'>UseContext Hook</h1>
            <p className='pText'>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <p className='pText'>It is used to manage global data, like global state, themes user settings etc.</p>

            <LoginContext.Provider value={{ username: 'John Doe' }}>
                <ParentComponent />
            </LoginContext.Provider>
        </>
    )
}

export default UseContextHook;


export const ParentComponent = () => {
    return (
        <>
            <h2>Parent Component</h2>
            <ChildComponent />
        </>
    );
}


export const ChildComponent = () => {
    const value = React.useContext(LoginContext);
    return (
        <>
            <h3>Child Component</h3>
            <p>Username: {value.username}</p>
        </>
    );
}