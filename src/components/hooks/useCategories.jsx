import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

export const useCategories = () => {
    const [categories, setCategories] = React.useState([])

    React.useEffect(() => {
        const db = getFirestore();
        const categoriesCollection = collection(db, "category"); // Cambio aquí

        getDocs(categoriesCollection)
        .then((snapshot) => {
            setCategories(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return categories;
}
