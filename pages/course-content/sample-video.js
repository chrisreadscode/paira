import _Head from "../../components/_Head";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Default.module.css";
import YouTube from "react-youtube";

export default function SampleVideo() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        <YouTube videoId={'9FBxfd7DL3E'}/>
      </main>
      <Footer />
    </>
  );
}
