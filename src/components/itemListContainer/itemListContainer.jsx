import { useState, useEffect } from "react";
import Item from "../../components/item/item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    let url = nombreCategoria
      ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
      : "https://fakestoreapi.com/products ";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [nombreCategoria]);

  return (
    
    <>
      {products.length > 0 ? (
        <>
          {products.map((pr) => (
            <Item producto={pr} key={pr.id} />
          ))}
        </>
      ) : (
        <Spinner
          animation="border"
          variant="danger"
          className="custom-spinner"
        />
      )}
    </>
  );
};

export default ItemDetailContainer;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const url = nombreCategoria
//         ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
//         : "https://fakestoreapi.com/products";
//       const response = await fetch(url);
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, [nombreCategoria]);
