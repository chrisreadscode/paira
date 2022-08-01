import styles from "../../styles/Signup.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";

export default function Student() {
    return (
    <div className={styles.container}>
      <_Head />

      <main className={styles.main}>
        <div id={styles.box}>
            <h1 className={styles.title}>
              Signup
            </h1>

            <div>
              <input className={styles.input} name="first_name" placeholder="First name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
              <input className={styles.input} name="last_name" placeholder="Last name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
            </div>
            <input className={styles.input} name="student_email" placeholder="Student's email"></input>
            <input className={styles.input} name="grade_level" placeholder="Grade level" ></input>
            <input className={styles.input} name="student_school" placeholder="Student's school"></input>
            <input className={styles.input} name="question" placeholder="What do you hope to gain through PAIRA?" ></input>

            <div style={{display: "flex", justifyContent: "center"}}><button id={styles.button}> Create new account</button></div>


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