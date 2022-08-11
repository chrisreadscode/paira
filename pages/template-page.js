import _Head from "../components/_Head";
import Footer from "../components/Footer";
import HeaderStudent from "../components/HeaderStudent";
import styles from "../styles/Default.module.css";

export default function Sample() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        {/* Please kindly place text here */}
      </main>
      <Footer />
    </>
  );
}

{/* <div id={styles.box}> */}