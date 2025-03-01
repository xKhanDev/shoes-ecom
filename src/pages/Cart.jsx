// src/pages/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2 className="text-center text-xl">Your cart is empty</h2>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cart.map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-lg">${item.price}</p>
                    <p className="text-sm">Size: {item.size}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-error btn-xs mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <button onClick={clearCart} className="btn btn-warning mt-2">
              Clear Cart
            </button>
            <Link to="/checkout" className="btn btn-success mt-2 w-full">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
