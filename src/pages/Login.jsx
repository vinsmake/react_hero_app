import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

    /* context */
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    /* we're using lastPath to login again and still in the same page */
    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';


        login('vinsmake');

        navigate(lastPath, {replace: true});
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