import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor";
import MessageMain from "../../components/MessageMain";
import styles from "../../styles/Default.module.css";

export default function Message() {
  return (
    <>
      <_Head />
      <HeaderMentor />
      <div className={styles.container}>
        <main className={styles.main}>
          <MessageMain />
        </main>
      </div>
      <Footer />
    </>
  );
}
