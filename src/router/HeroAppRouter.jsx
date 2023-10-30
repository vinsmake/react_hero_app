import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Dc } from "../pages/Dc"
import { Marvel } from "../pages/Marvel"
import { Hero } from "../pages/Hero"
import { Search } from "../pages/Search"

export const HeroAppRouter = () => {
    return (
    <>
        <Navbar/>

        <section className="container">
        <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/search" element={<Search />} />
                <Route path="/hero/:id" element={<Hero />} />
                <Route path="/" element={<Navigate to='/marvel' />} />
        </Routes>
        </section>
    </>
    )
}