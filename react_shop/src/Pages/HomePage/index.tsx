import React from "react";
import { Link } from "react-router-dom";
import LastProducts from "../../Components/LastProducts";
import styles from "./homePage.module.scss";
const HomePage = () => {

  return (
    <main>
      <section className={styles.imageSection}>
        <img src='https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/conor-mcgregor-071121-getty-ftrjpg_1venkwrziftm312j669z2p85yo.jpg?itok=l1Xv_CU3'></img>
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
