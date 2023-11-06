import React from "react";
import { Link } from "react-router-dom";
import style from "./item.css";


const ItemCard = ({ producto }) => {
  return (
    <div className={style.itemcard}>
      <div className="item-image-container">
        <img className="item-image" src={producto.image} alt={producto.title} />
      </div>
      <h3>{producto.title}</h3>
      <p>USD {producto.price}</p>
      <Link to={`/item/${producto.id}`} className="custom-link">
        Ver Producto
      </Link>
    </div>
  );
};

export default ItemCard;
