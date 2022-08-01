import styles from "../../styles/Home.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Student() {
    return (
    <div className={styles.container}>
      <_Head />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Welcome to our student signup page!</p>

        {/* <form action="/api/hello" method="post" onSubmit={handleSubmit}>
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Submit</button>
        </form> */}
      </main>

      <Footer />
    </div>
  );
}