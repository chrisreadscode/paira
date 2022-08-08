import _Head from "../../components/_Head";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Login.module.css";

export default function SampleReading() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        <object
          data="https://ppc.sas.upenn.edu/sites/default/files/ppintroarticle.pdf"
          style={{height: "90vh", width: "100vw"}}
          type="application/pdf"
        />
      </main>
      <Footer />
    </>
  );
}
