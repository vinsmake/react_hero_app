import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

    /* context */
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () => {

        login('vinsmake');

        navigate('/', {replace: true});
    }

    return (
        <>
            <section className="conainer m-5">
                <h1>Login</h1>
                <hr/>

                <button className="btn btn-primary"
                onClick={onLogin}
                >Login</button>
            </section>
        </>
    )
}