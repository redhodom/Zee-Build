import logo from '/zee.png'
import zblogo from '/zblogo.png'
import getstart from '/gs.png'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'  // 👈 hamburger & close icons

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className={styles.cover}></div>

      {/* Header Section */}
      <motion.section
        className={styles.header}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={zblogo} alt="ZeeBuild" className={styles.zb} />

        {/* Hamburger button (visible only under 400px) */}
        <button className={styles.menuBtn} onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <Link to="/Home1" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Support" onClick={() => setMenuOpen(false)}>Support</Link>
          <Link to="/Login" onClick={() => setMenuOpen(false)}>Login / Signup</Link>
        </div>
      </motion.section>

      {/* Main Section */}
      <section className={styles.main}>
        <motion.img
          src={logo}
          alt="ZeeBuild Logo"
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.button
          className={styles.btn}
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 25px rgba(255, 230, 3, 0.8)',
          }}
          whileTap={{ scale: 0.96 }}
        >
          <Link to="/Home1"><img src={getstart} alt="Get Started" className={styles.btnimg} /></Link>
        </motion.button>

        <motion.div
          className={styles.notes}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>
            Welcome to <span className={styles.highlight}>ZeeBuild</span>
          </h2>
          <p>
            Your one-stop destination for building the <b>ultimate PC setup</b> — customized exactly
            the way you want it. Explore components, compare performance, and configure your dream rig
            with ease.<br /><br />
            Whether you're a <b>gamer</b>, <b>creator</b>, or <b>tech enthusiast</b>, ZeeBuild empowers
            you to design, test, and visualize your perfect machine effortlessly.<br /><br />
            Click the <b>“Get Started”</b> button above to begin your custom build journey.
          </p>
        </motion.div>
      </section>

      {/* Footer Section */}
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p>© 2025 ZeeBuild. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default Home
