import { Link } from "react-router-dom";
import styles from "./Home1.module.css";
import { motion } from "framer-motion";
import { useState, useRef, useContext } from "react";
import { Mbcontex } from "./Home1context";

const Home1 = () => {
  // ✅ Get data from context
  const { mbdata, gsdata, prdata, ssdData, ramData, psuData, caseData, monitorData, kbData, addToCart,} = useContext(Mbcontex);

  const [showNav, setShowNav] = useState(false);
  const contentRef = useRef(null);

  const handleGetStarted = () => {
    setShowNav(true);

    // ✅ Smooth scroll to content area
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
  setSelectedItem(item);
};

const closeViewer = () => {
  setSelectedItem(null);
};

const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
};




  return (
    <div className={styles.homeContainer}>
{/* ✅ Navbar */}
<motion.nav
  className={styles.nv}
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
  <div className={styles.navbar}>
    {/* Hamburger menu toggle */}
    <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
    <label htmlFor="menu-toggle" className={styles.hamburger}>
      ☰
    </label>

    <ul className={styles.navLinks}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Support">Support</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>

      {/* Dropdown for components */}
      <li className={styles.dropdown}>
        Components ▼
        <ul className={styles.dropdownMenu}>
          <li onClick={() => scrollTo("motherboards")}>Motherboard</li>
          <li onClick={() => scrollTo("graphics")}>Graphics Cards</li>
          <li onClick={() => scrollTo("processor")}>Processor</li>
          <li onClick={() => scrollTo("ssd")}>SSD & NVMe</li>
          <li onClick={() => scrollTo("ram")}>RAM</li>
          <li onClick={() => scrollTo("psu")}>PSU</li>
          <li onClick={() => scrollTo("cabinet")}>Cabinet</li>
          <li onClick={() => scrollTo("monitor")}>Monitor</li>
          <li onClick={() => scrollTo("keyboard")}>Keyboard & Mouse</li>
        </ul>
      </li>
    </ul>
  </div>
</motion.nav>

 {/* ✅ Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>
          Welcome to <span>Zee Build</span>
        </h1>
        <p className={styles.subtitle}>
          Build your dream PC with futuristic tools and real-time component
          compatibility.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={handleGetStarted}>
            Get Started
          </button>
          <button className={styles.btnOutline}>Learn More</button>
        </div>
      </motion.div>


 
    {/* product viver */}

   {selectedItem && (
  <div className={styles.viwer}>
    <button className={styles.closeBtn} onClick={closeViewer}>
      ✖
    </button>
    <img src={selectedItem.img} alt={selectedItem.name} className={styles.productImg} />
    <div>
      <h3>{selectedItem.name}</h3>
      <p>{selectedItem.details}</p>
      <b>{selectedItem.price}</b>
      <div className={styles.cardButtons}>
        <button className={styles.likeBtn}>Like</button>
        <button
          className={styles.cartBtn}
          onClick={(e) => addToCart(selectedItem, e)}
        >
          Add to Cart
        </button>
        <Link to="/cart"> <button className={styles.cartBtn} >View Cart</button></Link>
      </div>
    </div>
  </div>
)}




      {/* ✅ Product Section */}
      <div className={styles.productContainer} ref={contentRef}>
        <div className={`${styles.cardx} ${styles.motherboard}`}>
          <h2 className={styles.sectionTitle} id="motherboards">Motherboards</h2>
          <div className={styles.productGrid}>
            {mbdata.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* ✅ Graphics Cards Section */}
        <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="graphics">Graphics Cards</h2>
          <div className={styles.productGrid}>
            {gsdata.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

            {/* ✅ processor Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="processor">Processor</h2>
          <div className={styles.productGrid}>
            {prdata.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* ✅ ssd Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="ssd">SSD Sata & NVMe</h2>
          <div className={styles.productGrid}>
            {ssdData.map((item, index) => (
             <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* ✅ ram Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="ram">RAM</h2>
          <div className={styles.productGrid}>
            {ramData.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

            {/* ✅ Psu Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="psu">PSU</h2>
          <div className={styles.productGrid}>
            {psuData.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

         {/* ✅ Cabinet Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="cabinet">Cabinet</h2>
          <div className={styles.productGrid}>
            {caseData.map((item, index) => (
             <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* ✅ Monitor Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="monitor">Monitor</h2>
          <div className={styles.productGrid}>
            {monitorData.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* ✅ KeyBoard Cards Section */}
            <div className={`${styles.cardx} ${styles.graphics}`}>
          <h2 className={styles.sectionTitle} id="keyboard">KeyBoard & Mouse</h2>
          <div className={styles.productGrid}>
            {kbData.map((item, index) => (
              <motion.div key={index} className={styles.productCard} whileHover={{ scale: 1.05 }}>
  <img
    src={item.img}
    alt={item.name}
    className={styles.productImg}
    onClick={() => handleImageClick(item)}
  />
  <div className={styles.productDetails}>
    <h3>{item.name}</h3>
    <p>{item.details}</p>
    <b>{item.price}</b>
    <div className={styles.cardButtons}>
      <button className={styles.likeBtn}>Like</button>
      <button
        className={styles.cartBtn}
        onClick={(e) => addToCart(item, e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home1;
