import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function ParentThankYou() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Thank You So Much!</h1>
            <div>
              We have received your submission and will reach out to your child
              shortly. We greatly appreciate your interest. We hope you have a great day!
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
