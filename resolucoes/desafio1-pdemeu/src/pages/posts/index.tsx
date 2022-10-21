import Head from 'next/head'
import React from 'react'
import styles from "./styles.module.css";

function index() {
  return (
    <>
      <Head>
        <title>Posts | Desafio01 - pdemeu</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.list}>
          <a href="">
            <time>20 de outubro de 2022</time>
            <strong>Lorem Ipsum</strong>
            <p>
              Lorem IpsumLorem Ipsum. Lorem Ipsum, Lorem IpsumLorem IpsumLorem Ipsum
              Lorem Ipsum, Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum,
              Lorem IpsumLorem Ipsum.
            </p>
          </a>
          <a href="">
            <time>20 de outubro de 2022</time>
            <strong>Lorem Ipsum</strong>
            <p>
              Lorem IpsumLorem Ipsum. Lorem Ipsum, Lorem IpsumLorem IpsumLorem Ipsum
              Lorem Ipsum, Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum,
              Lorem IpsumLorem Ipsum.
            </p>
          </a>
          <a href="">
            <time>20 de outubro de 2022</time>
            <strong>Lorem Ipsum</strong>
            <p>
              Lorem IpsumLorem Ipsum. Lorem Ipsum, Lorem IpsumLorem IpsumLorem Ipsum
              Lorem Ipsum, Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum,
              Lorem IpsumLorem Ipsum.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default index