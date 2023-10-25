import style from "./navBar.module.css";
import CartWidget from "../cartWidget/cartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const arrayDeCategorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className={style.container}>
      <NavLink to={"/"}>
        <h1>VIP Ecomerce</h1>
      </NavLink>
      {arrayDeCategorias.map((cat, index) => (
        <NavLink to={`category/${cat}`} key={index}>
          {cat}
        </NavLink>
      ))}
      <CartWidget />
    </div>
  );
};

export default NavBar;
