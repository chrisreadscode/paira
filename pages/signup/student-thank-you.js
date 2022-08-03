import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function StudentThankYou() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Thank you for your interest!</h1>
            <div>
              Your parents will shortly receive an email for further steps.
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
