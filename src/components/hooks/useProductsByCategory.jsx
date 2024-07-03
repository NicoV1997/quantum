import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");

        const q = query(productsCollection, where("category", "==", category));

        getDocs(q)
        .then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [category]);

    return { products, loading };
}