import React from "react";
import { Link } from "react-router-dom";
import LastProducts from "../../Components/LastProducts";
import banner from '../../Icons/homeBanner.jpg'
import styles from "./homePage.module.scss";
const HomePage = () => {

  return (
    <main>
      <section className={styles.imageSection}>
        <img src={banner}></img>
      </section>
      <section className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>
            <b>Most Popular Products</b>
          </span>
          <Link to="/allProducts">
            <span className={styles.sectionNav}>View All</span>
          </Link>
        </div>
        <LastProducts/>
      </section>
    </main>
  );
};

export default HomePage;
