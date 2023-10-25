const ItemDetailContainer = () => {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  return (
    <>
      <h3>soy el producto</h3>
    </>
  );
};

export default ItemDetailContainer;
