import React from 'react'
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <p className={styles.logo}>desafio blog | pdemeu</p>
      </div>
    </header>
  )
}
