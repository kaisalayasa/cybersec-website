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
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima quam ipsa ipsam aut sint perferendis illo placeat ducimus, natus consequuntur sunt fuga dolorem doloribus cumque quos nihil reprehenderit veritatis.
          </p>
        </section>

        <section className={styles.key_learning}>
          <h1>Key Learnings</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi asperiores repellendus, sunt vero nostrum quae eos consectetur. Modi dignissimos officiis mollitia quidem ratione? Architecto, sapiente? Beatae quidem quae perferendis quia.
          </p>
        </section>
      </div>
    </>
  )
}

export default MainGamePage
