import { useContext } from "react";
import { Link, NavLink, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {

    const navigate = useNavigate();

    const {user, logout} = useContext(AuthContext);

    /* Logout button */
    const onLogout = () => {
        logout();
        navigate('/login', {replace: true})
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} nav-item nav-link`} to="/marvel">Marvel</NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} nav-item nav-link`} to="/dc">DC</NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} nav-item nav-link`} to="/search">Search</NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary">{user?.name}</span>
                        <button onClick={onLogout} className="nav-item nav-link btn">Logout</button>
                    </ul>
                </div>

            </nav>

        </>
    )
}