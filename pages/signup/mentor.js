import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";

export default function ParentSignup() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      mentor_email: event.target.mentor_email.value,
      level_of_education: event.target.level_of_education.value,
      colleges_attended: event.target.colleges_attended.value,
      how_question: event.target.how_question.value,
    }

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/signup/mentor"

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (!result.signup) alert(`Error: ${result.data}`);
    else router.push("/signup/mentor-thank-you");
  }

  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id={styles.box}>
            <h1 className={styles.title}>Questions About Applicant</h1>
            <form action="/api/signup/mentor" method="post" onSubmit={(event) => handleSubmit(event)}>
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
                <button id={styles.button} type="submit">Create new account</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
