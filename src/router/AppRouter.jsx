import { Navigate, Route, Routes } from "react-router-dom"
import { Marvel } from "../pages/Marvel"
import { Dc } from "../pages/Dc"
import { Login } from "../pages/Login"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Navigate to='/marvel' />} />
            </Routes>
        </>
    )
}