import _Head from "../../components/_Head";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Default.module.css";

export default function SampleBlogPost() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        <object
          data="https://characterlab.org/tips-of-the-week/the-paramecium-principle/"
          style={{height: "90vh", width: "100vw"}}
          type="application/pdf"
        />
      </main>
      <Footer />
    </>
  );
}
