import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "package.json";
export async function getStaticProps(ctx) {
  return {
    props: {},
  };
}

export default function Home({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi Power Inc.</title>
        <meta name="description" content="As one of Orange County's premier electrical contracting companies we strive for customer satisfaction and treat your home or business if it was our own." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Hi Power Inc.</a> v
          {nextPackage.version}
        </h1>

        <p className={styles.description}>
          We appreciate your patience while we get things ready for you.
        </p>

        <img width="441" height="110" src="hi-power-inc.png" alt="Hi Power Inc" />
      </main>
    </div>
  );
}
