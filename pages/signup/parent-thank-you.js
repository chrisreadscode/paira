import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import styles from "../../styles/ThankYou.module.css";

export default function ParentThankYou() {
  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id={styles.box}>
            <h2 className={styles.title}>
              Thank you, we will reach out to your child shortly!
            </h2>
            <div>
              We have received your submission. We greatly appreciate your
              interest.
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
