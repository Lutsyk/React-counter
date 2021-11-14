import React from "react";
import { useContext, useState } from "react/cjs/react.development";

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

export const AlertProvider = ({children}) =>{

    const [alert, setAlert] = useState(false)
    const toggle = () => setAlert(prev => !prev)


    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {children}
        </AlertContext.Provider>
    )
}