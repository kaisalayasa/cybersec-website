import React, { useState } from 'react'
import styles from './MainGamePage.module.css'
import UnityGame from '../components/UnityLoader'

function MainGamePage() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <h1>CyberSquirrel: Scam Awareness Game</h1>
          <p>Learn how to spot scams and stay safe online</p>
        </div>

        <section className={styles.project_container}>
          <UnityGame/>
        </section>
        <br />
        <br />
        <hr />
        <hr />

        <section className={styles.overview}>
          <hr />
          
          <h1>Overview</h1>
          <p>
           In this level, you’ll learn how to spot physical cybersecurity risks starting with a suspicious USB left outside the café. You’ll explore the area, interact with objects, and decide how to handle the situation. The goal is to help players recognize real-world threats and make safer choices on campus.
          </p>
        </section>

        <section className={styles.key_learning}>
          <hr />
          <h1>Made by Kais and Nour</h1>
          <p>
            This project was created as a simple cybersecurity awareness game. Our goal is to help people learn how to stay safe online in an interactive and easy way. </p>
        </section>
      </div>
    </>
  )
}

export default MainGamePage
