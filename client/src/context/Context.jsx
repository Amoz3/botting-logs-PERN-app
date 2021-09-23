import React, {useState, createContext} from 'react'

export const Context = createContext();

export const ContextProvider = (props) => {
    const [BotData, setBotData] = useState([])
    const [TotalsData, setTotalsData] = useState([])
    
    return(
        <Context.Provider value={{BotData, setBotData, TotalsData, setTotalsData}}>
            {props.children}
        </Context.Provider>
    );
}