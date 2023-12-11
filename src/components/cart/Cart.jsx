import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useState } from "react";
// import burger3 here

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const increment = (item) => {
    item((prevCount) => prevCount + 1)
  };

  const decrement = (item) => {
    item(prevCount => Math.max(0, prevCount - 1))
  };

  let totalCount = count * 200 + count2 * 500 + count3 * 1800

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={count}
          increment={() => increment(setCount)}
          decrement={() => decrement(setCount)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={count2}
          increment={() => increment(setCount2)}
          decrement={() => decrement(setCount2)}
        />
        <CartItem
          title={"Cheese Burger With French Fries"}
          img={burger3}
          value={count3}
          increment={() => increment(setCount3)}
          decrement={() => decrement(setCount3)}
        />

       

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{totalCount}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{totalCount + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
          <Link className="menu" to="/menu">Back to Menu</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
