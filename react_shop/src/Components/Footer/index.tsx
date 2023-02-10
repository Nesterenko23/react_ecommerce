import React from 'react'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.fLeftSide}>
          <div>
            <span>CONTACT</span>
            <span>TERMS OF SERVICES</span>
            <span>SHIPPING AND RETURNS</span>
          </div>
          <div>
            <span>© 2023 Nesterenko. Terms of use and privacy policy.</span>
          </div>
        </div>

        <div className={styles.fRightSide}>
          <img src="./img/Group 10.png" alt='Social icons' />
        </div>
      </footer>
  )
}

export default Footer