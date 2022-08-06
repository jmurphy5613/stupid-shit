import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Stupid Shit</h1>
      <button className={styles["play-button"]}>Play</button>
    </div>
  )
}

export default Home
