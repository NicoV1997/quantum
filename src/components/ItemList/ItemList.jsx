import React from "react"; 
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({productos}) => {
    return (
        <div className="items">
            <div className="item-box">
            <Item id= {1} title= "Teclado Razer Huntsman" description="Teclado óptico para Juegos con latencia de Entrada Casi Cero (interruptores óptico-mecánicos analógicos, Teclas PBT, Cable USB-C Desmontable)" price="112" picture="/images/RzerHuman.jpg" />
            </div>
            <div className="item-box">
            <Item id= {2} title= "Teclado Roccat Vulcan" description="TKL Pro RGB, retroiluminación LED clave por tecla AIMO, interruptores ópticos de titanio, placa superior de aluminio, rueda multimedia" price="100" picture="/images/RocatVulcan.jpg" />
            </div>
            <div className="item-box">
            <Item id= {3} title= "Teclado Mountain Everest" description="Gaming Tastatur - MX Blue, ANSI, US-Layout, Negro" price="90" picture="/images/MountainEverest.jpg" />
            </div>
            <div className="item-box">
            <Item id= {4} title= "Teclado Corsair K95" description="RGB Platinum Teclado Mecánico Gaming, Cherry MX Brown, Táctil y Silencioso, Retroiluminación Multicolor LED RGB, Estructura de Aluminio Anodizado, QWERTY Español, color Negro" price="190" picture="/images/CorsairK95.jpg" />
            </div>
        </div>
    )
    }

