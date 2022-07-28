import styles from '../styles/Home.module.css'
import _Head from '../components/_Head.js'
import Footer from '../components/Footer.js'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <_Head />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Welcome to our second page!</p>
      </main>

      <Footer />
    </div>
  );
}
