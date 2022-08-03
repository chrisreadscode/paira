import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function MentorThankYou() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Application Complete</h1>
            <div>
              Thank you for completing the survey! We are currently reviewing your application and will notify you shortly.
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
