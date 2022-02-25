import React, {createContext, useState, useLayoutEffect} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(false);
    
    useLayoutEffect(()=>{
        const lastTheme = window.localStorage.getItem('darkTheme');
        setDarkMode(lastTheme)
    },[])

    const toggleDarkMode = (dark) => {
            setDarkMode(!darkMode);
            window.localStorage.setItem('darkTheme', !dark);
    };
    return (
        <div>  
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};

export {DarkModeContext, DarkModeProvider};