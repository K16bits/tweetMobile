import React,{createContext, useContext} from 'react'

const AuthContext = createContext({})

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{teste:'testeeee'}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    useAuth,
    AuthProvider
}