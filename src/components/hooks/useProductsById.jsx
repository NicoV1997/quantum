import React from "react";
import { getProductsById } from "../../services/productsServices";

export const useProductById = (itemId) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    getProductsById(itemId)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { product, loading };
};