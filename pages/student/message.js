import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent";
import MessageMain from "../../components/MessageMain";
import styles from "../../styles/Default.module.css";

export default function Message() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <div className={styles.container}>
        <main className={styles.main}>
          <MessageMain />
        </main>
      </div>
      <Footer />
    </>
  );
}
