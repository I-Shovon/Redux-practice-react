import React from "react";
import { BiListMinus, BiListPlus } from "react-icons/bi";
import { useProduct } from "../context/ProductProvider";
import { actionTypes } from "../state/ProductState/actionType";

const ProductCard = ({ product, isInCart = false, isInWish = false }) => {
  const { dispatch } = useProduct();

  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900">
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li key={index} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {isInCart ? (
          <button
            onClick={() =>
              dispatch({
                type: actionTypes.REMOVE_PRODUCT,
                payload: { product: product, removeFrom: "cart" },
              })
            }
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
            }
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}

        {isInWish ? (
          <button
            onClick={() =>
              dispatch({
                type: actionTypes.REMOVE_PRODUCT,
                payload: { product, removeFrom: "wishlist" },
              })
            }
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            <BiListMinus className="text-white" />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_WISH, payload: product })
            }
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
