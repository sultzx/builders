import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import { AuthPage } from "./pages/AuthPage"
import { MainPage } from "./pages/MainPage"
import { ServicesPage } from "./pages/ServicesPage"
import { CarsPage } from "./pages/CarsPage"
import { AboutPage } from "./pages/AboutPage"


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/main" exact element={<MainPage/>}/>
                <Route path="/services" exact element={<ServicesPage/>}/>
                <Route path="/cars" exact element={<CarsPage/>}/>
                <Route path="/about" exact element={<AboutPage/>}/>
                <Route path="/" element={<Navigate replace to="/main" />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/main" exact element={<MainPage/>}/>
            <Route path="/services" exact element={<ServicesPage/>}/>
            <Route path="/cars" exact element={<CarsPage/>}/>
            <Route path="/about" exact element={<AboutPage/>}/>
            <Route path="/" exact element={<AuthPage/>}/>
        </Routes>
    )
}