import { useState } from "react";
import styles from "./PamentPage.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [method, setMethod] = useState("upi");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment initiated using ${method.toUpperCase()}!`);
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel the payment?")) {
      navigate("/cart"); // 👈 redirect back to cart
    }
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Complete Your Payment
      </motion.h1>

      <div className={styles.paymentBox}>
        <div className={styles.methods}>
          <h3>Select Payment Method</h3>

          <label className={styles.methodItem}>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={method === "upi"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className={styles.methodText}>UPI (Google Pay, PhonePe, Paytm)</span>
          </label>

          <label className={styles.methodItem}>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className={styles.methodText}>Credit / Debit Card</span>
          </label>

          <label className={styles.methodItem}>
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={method === "netbanking"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className={styles.methodText}>Net Banking</span>
          </label>

          <label className={styles.methodItem}>
            <input
              type="radio"
              name="paymentMethod"
              value="wallet"
              checked={method === "wallet"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className={styles.methodText}>Wallets</span>
          </label>
        </div>

        <form className={styles.form} onSubmit={handlePayment}>
          {method === "upi" && (
            <div>
              <label className={styles.fieldLabel}>Enter UPI ID:</label>
              <input className={styles.input} type="text" placeholder="example@upi" required />
            </div>
          )}

          {method === "card" && (
            <>
              <label className={styles.fieldLabel}>Card Number:</label>
              <input className={styles.input} type="text" maxLength="16" required />

              <label className={styles.fieldLabel}>Card Holder Name:</label>
              <input className={styles.input} type="text" required />

              <div className={styles.row}>
                <div style={{ flex: 1 }}>
                  <label className={styles.fieldLabel}>Expiry Date:</label>
                  <input className={styles.input} type="month" required />
                </div>

                <div style={{ width: 120 }}>
                  <label className={styles.fieldLabel}>CVV:</label>
                  <input className={styles.input} type="password" maxLength="3" required />
                </div>
              </div>
            </>
          )}

          {method === "netbanking" && (
            <div>
              <label className={styles.fieldLabel}>Select Bank:</label>
              <select className={styles.input} required>
                <option value="">--Select--</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis</option>
                <option>Kotak</option>
              </select>
            </div>
          )}

          {method === "wallet" && (
            <div>
              <label className={styles.fieldLabel}>Select Wallet:</label>
              <select className={styles.input} required>
                <option value="">--Select--</option>
                <option>Paytm Wallet</option>
                <option>Mobikwik</option>
                <option>Freecharge</option>
                <option>Amazon Pay</option>
              </select>
            </div>
          )}

          <div className={styles.buttonRow}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={styles.payBtn}
              type="submit"
            >
              Pay Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={styles.cancelBtn}
              type="button"
              onClick={handleCancel}
            >
              Cancel Payment
            </motion.button>
          </div>
        </form>
      </div>

      <footer className={styles.footer}>
        <p>© 2025 ZeeBuild. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PaymentPage;
