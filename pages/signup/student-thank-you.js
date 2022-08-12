import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Link from "next/link";
import styles from "../../styles/ThankYou.module.css";

export default function StudentThankYou() {
  return (
    <>
      <_Head />
      <Header />
      <main className={styles.main}>
        <div id={styles.box}>
          <h2 className={styles.title}>
            Thank you, your parents will receive an email for next steps!
          </h2>
          <div>We greatly appreciate your interest.</div>
          <br />
          <Link href="/login">
            <a>Click here to return to login</a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
