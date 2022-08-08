import _Head from "../../components/_Head";
import AssignmentCard from "../../components/AssignmentCard";
import Footer from "../../components/Footer";
import HeaderMentor from "../../components/HeaderMentor";
import styles from "../../styles/Login.module.css";

export default function SavedResources() {
  return (
    <>
      <_Head />
      <HeaderMentor />
      <main className={styles.container + " " + styles.main}>
        {/* recommended resources */}
        <div style={{ display: "flex" }}>
          <AssignmentCard wide={"wide"}/>
          <AssignmentCard wide={"wide"}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}