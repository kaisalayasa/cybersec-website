import React, { useState } from 'react'
import styles from './MainGamePage.module.css'
import UnityGame from '../components/UnityLoader'

function MainGamePage() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <h1>CyberSmart: Scam Awareness Game</h1>
          <p>Learn how to spot scams and stay safe online</p>
        </div>

        <section className={styles.project_container}>
          <UnityGame/>
        </section>

        <section className={styles.overview}>
          <hr />
          
          <h1>Overview</h1>
          <p>
           This game teaches players how to recognize common online scams. You will interact with different situations, choose how to respond, and learn the safest actions to take. The goal is to help people stay aware and make smarter decisions when using the internet.
          </p>
        </section>

        <section className={styles.key_learning}>
          <h1>Made by Kais and Nour</h1>
          <p>
            This project was created as a simple cybersecurity awareness game. Our goal is to help people learn how to stay safe online in an interactive and easy way. </p>
        </section>
      </div>
    </>
  )
}

export default MainGamePage
