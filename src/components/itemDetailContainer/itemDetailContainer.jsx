import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../item/itemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar el producto");
        }
        return res.json();
      })
      .then((json) => {
        setProducto(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
