import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase3/Header_PC_1500x178_English.jpg"
          alt=""
        />

        {cart?.length === 0 ? (
          <div>
            <h2>Your shopping Cart is empty</h2>
            <p>You have no items in cart. "Add to cart" to the item</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && <div className="checkout_right">
                 <Subtotal />
          </div>}
    </div>
  );
}

export default Checkout;
