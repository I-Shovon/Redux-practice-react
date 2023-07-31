import React from "react";
import { useProduct } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
    const {
      state: { wish, loading, error },
    } = useProduct();

    let content;

    if (loading) {
      content = <p>Loading</p>;
    }
    if (error) {
      content = <p>Something went wrong</p>;
    }

    if (!loading && !error && wish.length === 0) {
      content = <p>Nothing to show</p>;
    }
    if (!loading && !error && wish.length) {
      content = wish.map((product) => (
        <ProductCard product={product} key={product._id} 
        isInWish/>
      ));
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Wishlist;
