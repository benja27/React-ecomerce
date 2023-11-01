import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error.menssage));
  }, []);

  return (
    <>
      <h2 className="saludo">{greeting}</h2>
      <div>
        {products.map((prod) => (
          <div key={prod.id}>
            <img src={prod.image} width={200} />
            <h2>{prod.title}</h2>
            <Link to={`/item/${prod.id}`}>Ver mas</Link>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default ItemListContainer;
