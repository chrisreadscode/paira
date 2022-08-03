import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function Student() {
  const router = useRouter();

  const handleStudentSignupSubmit = async (event) => {
    event.preventDefault();

    router.push("/assessment/initial");
  };
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={handleStudentSignupSubmit}>
              <div>
                <input
                  className={styles.input}
                  name="first_name"
                  placeholder="First name"
                  style={{ margin: "20px 20px 10px 20px", width: "40%" }}
                ></input>
                <input
                  className={styles.input}
                  name="last_name"
                  placeholder="Last name"
                  style={{ margin: "20px 20px 10px 20px", width: "40%" }}
                ></input>
              </div>
              <input
                className={styles.input}
                name="username"
                placeholder="Email"
              ></input>
              <input
                className={styles.input}
                name="password"
                placeholder="Password"
              ></input>
              <input
                className={styles.input}
                name="question"
                placeholder="What do you hope to gain through PAIRA?"
              ></input>
              <input
                className={styles.input}
                name="student_school"
                placeholder="What school do you attend?"
              ></input>
              <input
                className={styles.input}
                name="parent_email"
                placeholder="Parent's email"
              ></input>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button id={styles.button}>Create new account</button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
