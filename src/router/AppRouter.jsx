import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { HeroAppRouter } from "./HeroAppRouter"

export const AppRouter = () => {
    return (
        <>
        
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<HeroAppRouter />} />
            </Routes>
            
        </>
    )
}