// src/pages/ProductDetails.jsx
import { useContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import shoesData from "../data/shoes";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = shoesData.find((shoe) => shoe.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");
  const Navigate = useNavigate();

  const handleCart = () => {
    addToCart({ ...product, size: selectedSize });
    setSelectedSize("");
    Navigate("/cart");
  };

  if (!product)
    return <h2 className="text-center text-2xl">Product Not Found</h2>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg w-full h-96 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg font-semibold mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>

          <div className="mt-4">
            <label className="font-bold">Select Size:</label>
            <select
              className="select select-bordered w-full mt-2"
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option disabled selected>
                Select Size
              </option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>

          <button
            onClick={handleCart}
            className="btn btn-primary mt-4 w-full"
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
