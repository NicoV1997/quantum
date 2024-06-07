import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsConteiner from "../pages/ItemDetailsConteiner"
import NavBar from '../components/navBar/NavBar';
import Category from "../pages/Category";


export const MainRoutes = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:itemId" element={<ItemDetailsConteiner />} />
            <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
        </BrowserRouter>
    )
}
