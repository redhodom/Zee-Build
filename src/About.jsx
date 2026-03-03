import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* 🦾 Hero Section */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>
          About <span>Zee Build</span>
        </h1>
        <p className={styles.subtitle}>
          Empowering PC enthusiasts to design, customize, and build their dream rigs with futuristic precision.
        </p>
      </motion.section>

      {/* 🚀 Mission Section */}
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          At <strong>Zee Build</strong>, we believe building a PC should be as exciting as using one. 
          Our platform simplifies the process — providing a seamless, interactive, and educational experience 
          for gamers, creators, and tech enthusiasts. We merge cutting-edge tools with real-time compatibility checks, 
          helping users build smarter and faster.
        </p>
      </section>

      {/* 💡 Why Choose Us */}
      <section className={styles.whyChoose}>
        <h2>Why Choose Zee Build?</h2>
        <div className={styles.featuresGrid}>
          <motion.div
            className={styles.featureCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>⚙️ Smart Compatibility</h3>
            <p>
              Our system automatically ensures every component you choose is 
              compatible, so you never waste time or money.
            </p>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>🧠 AI Recommendations</h3>
            <p>
              Get AI-powered suggestions for balanced performance, 
              thermal efficiency, and budget optimization.
            </p>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>💻 Futuristic UI</h3>
            <p>
              Enjoy a next-gen user interface with smooth animations, 
              glowing effects, and real-time PC previews.
            </p>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>🛒 Easy Shopping</h3>
            <p>
              Add parts to your build or cart in one click, 
              with trusted partner vendors across Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🌐 Contact CTA */}
      <section className={styles.ctaSection}>
        <h2>Join the Future of PC Building</h2>
        <p>
          Whether you’re a gamer, creator, or tech lover, Zee Build is here to
          bring your dream setup to life.
        </p>
        <a href="/support" className={styles.ctaButton}>
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
