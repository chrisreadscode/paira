import _Head from "../../components/_Head";
import AssignmentCard from "../../components/AssignmentCard";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Login.module.css";
import Divider from "@mui/material/Divider";

export default function SavedResources() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        {/* recommended resources */}
        <div style={{ display: "flex" }}>
          <AssignmentCard />
          <AssignmentCard />
          <Divider orientation="vertical" flexItem />
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