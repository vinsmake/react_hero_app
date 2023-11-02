import { AuthProvider } from "./src/context/AuthProvider"
import { AppRouter } from "./src/router/AppRouter"

export const HeroApp = () => {
    return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
    )
}