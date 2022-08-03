import Link from "next/Link";
import styles from "../styles/Login.module.css";
import _Head from "../components/_Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function PasswordReset() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Your Password Has Been Reset</h1>
            <div>
              Please kindly check your email address for a temporary password.
            </div>
            <br />
            <div>
              After receiving your temporary password, kindly return to the
              login page <Link href="/login"><a>here</a></Link>. Thank you!
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
