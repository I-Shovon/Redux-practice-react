import React from "react";
import { useProduct } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProduct();

  let content;
  // const handleRemoveFromCart = (productId) => {
  //    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  // };

  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show</p>;
  }
  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ProductCard
        product={product}
        key={product._id}
        isInCart
      />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
