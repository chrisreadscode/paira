import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";

export default function StudentQuestions() {
  const router = useRouter();

  const handleParentStudentQuestionsSubmit = async (event) => {
    event.preventDefault();

    router.push("/signup/parent-thank-you");
  };
  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>
              Questions about Student
            </h1>

            <form onSubmit={handleParentStudentQuestionsSubmit}>
              <div>
                <input
                  className={styles.input}
                  name="student_first_name"
                  placeholder="Student's First name"
                  style={{ margin: "20px 20px 10px 20px", width: "40%" }}
                ></input>
                <input
                  className={styles.input}
                  name="student_last_name"
                  placeholder="Student's Last name"
                  style={{ margin: "20px 20px 10px 20px", width: "40%" }}
                ></input>
              </div>
              <input
                className={styles.input}
                name="student_email"
                placeholder="Student's Email"
              ></input>
              <input
                className={styles.input}
                name="grade_level"
                placeholder="Grade level"
              ></input>
              <input
                className={styles.input}
                name="school"
                placeholder="Student's School"
              ></input>
              <input
                className={styles.input}
                name="question"
                placeholder="What do you hope to gain through PAIRA?"
              ></input>
              <br></br>

              <div id={styles.consent}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  value="parent_consent"
                ></input>
                <label style={{ color: "black" }}>
                  {" "}
                  I consent that my child will use the platform
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button id={styles.button}>Create new account</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
