import _Head from "../../components/_Head";
import Footer from "../../components/Footer";
import HeaderMentor from "../../components/HeaderMentor";
import styles from "../../styles/Default.module.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function Sample() {
  return (
    <>
      <_Head />
      <HeaderMentor />
      <main className={styles.container + " " + styles.main}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Meeting Notes</h3>
          <CancelOutlinedIcon />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>7/18 Meeting Notes</div>
            <div>7/11 Meeting Notes</div>
            <div>7/4 Meeting Notes</div>
            <div>6/27 Meeting Notes</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}
