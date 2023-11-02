import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { HeroAppRouter } from "./HeroAppRouter"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>

            <Routes>

                {/* We can't acces to login page if we are logged */}
                <Route path="/login" element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
                } />

                {/* We can't acces to the app if we're not logged */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroAppRouter />
                    </PrivateRoute>
                } />

            </Routes>

        </>
    )
}