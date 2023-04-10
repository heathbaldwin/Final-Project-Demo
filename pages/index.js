import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to DecaCalc!</h1>

        <p className={styles.description}>
          The best decathalon score calculator on the internet.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Calculate Score &rarr;</h3>
            <p>Enter marks to see what your decathalon score would be.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Rankings&rarr;</h3>
            <p>View the world rankings for the decathalon.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Articles &rarr;</h3>
            <p>
              Current news articles regarding decathaletes and their paths to
              success.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>History &rarr;</h3>
            <p>View top marks across world history.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
