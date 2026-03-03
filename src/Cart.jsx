import { useContext } from "react";
import { Mbcontex } from "./Home1context";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, setCart } = useContext(Mbcontex);

  // ➕ Increase quantity for specific item
  const add = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  // ➖ Decrease quantity for specific item
  const sub = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  // 💰 Calculate total cost
  const total = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity,
    0
  );

  return (
    <div className={styles.cartPageContainer}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <>
          {/* 🧾 CART LIST */}
          <div className={styles.cartListWrapper}>
            {cart.map((item, index) => (
              <div key={index} className={styles.cartItemBox}>
                {/* 🖼 PRODUCT IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.cartItemImage}
                />

                {/* 📦 ITEM INFO */}
                <div className={styles.cartItemInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                  <b>{item.price}</b>
                </div>

                {/* 🔢 QUANTITY CONTROLS */}
                <div className={styles.cartQuantityBox}>
                  <span className={styles.cartQuantityLabel}>Quantity</span>
                  <span className={styles.cartQuantityValue}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => add(index)}
                    aria-label={`increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                  <button
                    onClick={() => sub(index)}
                    aria-label={`decrease quantity of ${item.name}`}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                </div>

                {/* 🗑 REMOVE BUTTON */}
                <button
                  className={styles.cartRemoveButton}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* 💵 TOTAL & ACTIONS */}
          <div className={styles.cartTotalBox}>
            <h2>Total: ${total.toFixed(2)}</h2>

            <div className={styles.cartActionButtons}>
              <button
                className={styles.cartActionButton}
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <Link to="/payment">
                <button className={styles.cartActionButton}>Buy Now</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
