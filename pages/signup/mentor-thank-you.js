import styles from "../../styles/ThankYou.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function MentorThankYou() {
  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id={styles.box}>
            <h2 className={styles.title}>Thank you, we will reach out to you shortly!</h2>
            <div>
               We are currently reviewing your application and will notify you with next steps.
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
