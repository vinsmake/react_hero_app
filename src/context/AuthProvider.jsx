import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        /* if user exist = true */
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async(name = '') => {

        const user = {id: '1', name}

        const action = {
            type: types.login,
            payload: user
        }
        /* to local storage the user */
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            /* methods */
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}