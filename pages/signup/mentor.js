import styles from "../../styles/Default.module.css";
import { useRouter } from "next/router";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";

export default function ParentSignup() {
  const router = useRouter();

  const handleMentorSignupSubmit = async (event) => {
    event.preventDefault();

    router.push("/signup/mentor-thank-you");
  };

  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Questions About Applicant</h1>
            <form onSubmit={handleMentorSignupSubmit}>
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
                name="mentor_email"
                placeholder="Email"
              ></input>
              <input
                className={styles.input}
                name="level_of_education"
                placeholder="Level of Education"
              ></input>
              <input
                className={styles.input}
                name="colleges_attended"
                placeholder="College(s) & Universities attended"
              ></input>
              <input
                className={styles.input}
                name="how_question"
                placeholder="How did you find out about PAIRA?"
              ></input>
              <br></br>
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
