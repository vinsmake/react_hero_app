import { useNavigate } from "react-router-dom"

export const Login = () => {


    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/marvel', {replace: true})
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