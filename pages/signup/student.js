import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";
import Image from "next/image";

export default function Student() {
  return (
    <div className={styles.container}>
      <_Head />
      <Image
        alt="paira logo"
        height="50px"
        width="200px"
        src="/paira-placeholder.png"
        z-index="0"
      />

      <main className={styles.main}>


        <div id={styles.box}>
          <h1 className={styles.title}>
            Signup
          </h1>


          <div>
            <input className={styles.input} name="first_name" placeholder="First name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
            <input className={styles.input} name="last_name" placeholder="Last name" style={{ margin: "20px 20px 10px 20px", width: "40%" }}></input>
          </div>
          <input className={styles.input} name="username" placeholder="Email"></input>
          <input className={styles.input} name="password" placeholder="Password" ></input>
          <input className={styles.input} name="question" placeholder="What do you hope to gain through PAIRA?" ></input>
          <input className={styles.input} name="student_school" placeholder="What school do you attend?"></input>
          <input className={styles.input} name="parent_email" placeholder="Parent's email"></input>

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