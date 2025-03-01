// src/pages/Checkout.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-[50%] mx-auto">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
