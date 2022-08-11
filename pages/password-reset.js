import Link from "next/link";
import styles from "../styles/ThankYou.module.css";
import _Head from "../components/_Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function PasswordReset() {
  return (
    <>
      <_Head />
      <Header />
      <main className={styles.main}>
        <div id={styles.box}>
          <h1 className={styles.title}>
            Thank you, please kindly check your email for a temporary password!
          </h1>
          <br />
          <div>
            After receiving your temporary password, kindly return to the login
            page{" "}
            <Link href="/login">
              <a>here</a>
            </Link>
            . Thank you!
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
