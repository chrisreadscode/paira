
import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";

export default function ParentSignup() {
  return (
    <div className={styles.container}>
      <_Head />

      <main className={styles.main}>
        <div id={styles.box}>
          <h1 className={styles.title} style={{ fontSize: "2rem" }}>
            Questions about Student
          </h1>

          <div>
            <input className={styles.input} name="student_first_name" placeholder="Student's First name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
            <input className={styles.input} name="student_last_name" placeholder="Student's Last name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
          </div>
          <input className={styles.input} name="student_email" placeholder="Student's Email"></input>
          <input className={styles.input} name="grade_level" placeholder="Grade level" ></input>
          <input className={styles.input} name="school" placeholder="Student's School" ></input>
          <input className={styles.input} name="question" placeholder="What do you hope to gain through PAIRA?" ></input><br></br>

          <div id={styles.consent}>
            <input type="checkbox" className={styles.checkbox} value="parent_consent"></input>
            <label style={{ color: "black" }}> I consent that my child will use the platform</label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}><button id={styles.button}> Create new account</button></div>


          {/* <form action="/api/hello" method="post" onSubmit={handleSubmit}>
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Submit</button>
          </form> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}