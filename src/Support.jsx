import styles from "./Support.module.css";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className={styles.sptContainer}>
      <motion.h1
        className={styles.sptTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Need Help? We’re Here for You
      </motion.h1>

      <p className={styles.sptSubtitle}>
        The ZeeBuild Support Team is always ready to assist you. Whether you’re
        facing issues with a purchase, product compatibility, or technical setup — we’ve got your back!
      </p>

      <div className={styles.sptGrid}>
        <motion.div
          className={styles.sptCard}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3>💬 Live Chat</h3>
          <p>
            Instant help from our support team in real-time. Available 9 AM
            to 9 PM IST.
          </p>
          <a href="mailto:support@zeebuild.com" className={styles.sptBtn}>
            Live Chat
          </a>
        </motion.div>

        <motion.div
          className={styles.sptCard}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3>📧 Email Support</h3>
          <p>
            Prefer writing to us? Drop us a message and we’ll reply within 24
            hours.
          </p>
          <a href="mailto:support@zeebuild.com" className={styles.sptBtn}>
            Send Email
          </a>
        </motion.div>

        <motion.div
          className={styles.sptCard}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3>📞 Call Assistance</h3>
          <p>
            Speak directly with our experts for hardware guidance and order
            queries.
          </p>
          <a href="tel:+919876543210" className={styles.sptBtn}>
            Call Now
          </a>
        </motion.div>
      </div>

      <div className={styles.sptFaq}>
        <h2>🧠 Frequently Asked Questions</h2>
        <ul>
          <li>
            <b>Q:</b> How can I track my order? <br />
            <b>A:</b> Go to your account dashboard → Orders → Track Status.
          </li>
          <li>
            <b>Q:</b> Can I return a product? <br />
            <b>A:</b> Yes, within 7 days of delivery if it’s unused and in
            original condition.
          </li>
          <li>
            <b>Q:</b> What payment methods are supported? <br />
            <b>A:</b> We support UPI, Debit/Credit Cards, and Net Banking.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
