import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const db = getFirestore() //esto busca la configuracion de firestore en mi proyecto, que en este caso esta en main

        const productsCollection = collection(db, "products") // aca queremos inicializar la coleccion, y lleva dos parametros, la base de datos  y la coleccion a la que queremos hacer referencia
        getDocs(productsCollection) //inicializamos los documentos, que son resueltos en una promesa.
            .then((snapshot) => { //snapshot es una convencion pero es basicamente lo que devuelve firebase
                setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))) //esto no lo entendi, tengo que buscar mas info, pero es una especie de traduccion de datos encriptados (?)
            })
            .catch((err) => console.log(err)) 
            .finally(() => setLoading(false))
        }, [])
    
    return {products, loading}
}