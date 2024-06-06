import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsConteiner from "../pages/ItemDetailsConteiner"
import NavBar from '../components/navBar/NavBar'
import { Item } from "../components/Item/Item";
import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner";
import Category from "../pages/Category";



export const MainRoutes = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:id" element={<ItemDetailsConteiner />} />
            <Route path="/category/:id" element={<Category />} />
        </Routes>
        </BrowserRouter>
    )
}
