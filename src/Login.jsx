import { useState } from "react";
import styles from "./Login.module.css";
import { motion } from "framer-motion";
import zb from "/zblogo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";   // 👈 add this import

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => setIsSignup(!isSignup);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* 🌟 HEADER */}
      <header className={styles.headerx}>
        <div className={styles.logoSection}>
          <img src={zb} alt="ZeeBuild Logo" />
        </div>

        {/* === Hamburger button for small screens === */}
        <button className={styles.menuBtn} onClick={toggleMenu}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* === Navigation Links === */}
        <nav className={`${styles.navx} ${menuOpen ? styles.showMenu : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
        </nav>
      </header>

      {/* 💻 MAIN LOGIN / SIGNUP */}
      <div className={styles.loginContainer}>
        <motion.div
          className={`${styles.formBox} ${isSignup ? styles.active : ""}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ✅ Login Form */}
          <div className={`${styles.form} ${!isSignup ? styles.show : ""}`}>
            <h2>Welcome Back!</h2>
            <p>Login to access your ZeeBuild account.</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className={styles.btnx}>Login</button>
            <p className={styles.toggleText}>
              Don’t have an account? <span onClick={toggleMode}>Sign Up</span>
            </p>
          </div>

          {/* ✅ Signup Form */}
          <div className={`${styles.form} ${isSignup ? styles.show : ""}`}>
            <h2>Create Account</h2>
            <p>Join ZeeBuild and start customizing your dream PC!</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className={styles.btnx}>Sign Up</button>
            <p className={styles.toggleText}>
              Already have an account? <span onClick={toggleMode}>Login</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* 🌌 FOOTER */}
      <footer className={styles.footerx}>
        <p>© 2025 ZeeBuild. All rights reserved.</p>
        <div className={styles.socialsx}>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Github</a>
        </div>
      </footer>
    </>
  );
};

export default Login;
