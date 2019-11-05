import React,{createContext} from 'react'
 export const AuthContext=createContext()

const AuthContextProvider=({children})=>(
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
)
export default AuthContextProvider
