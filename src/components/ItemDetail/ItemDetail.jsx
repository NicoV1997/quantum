import React from "react";
import NavBar from './components/navBar/NavBar'
import { Item } from "../Item/Item";


export const ItemDetail = ({Item}) => {
    return (
    <>
        <NavBar />
        <Item 
        id= {Item.id} 
        title= {Item.title}
        description={Item.description}
        price={Item.Price} 
        picture={Item.picture}
        />
    </>
    )

}
