import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ChooseYourMentor() {
  const router = useRouter();

  return (
    <div>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div id="matched-mentors">
            <h3>You have 3 matched mentors:</h3>
            <div>Tina Richards</div>
            <div>John Lake</div>
            <div>Gina Wee</div>
          </div>
          <div id="choose-mentor">
            <h2>Choose your mentor</h2>
            <Button onClick={() => router.push("/student/home")}>done</Button>
            <div id="mentor-profile-summary">
              {/* profile */}
              <div>Meet Gina Wee</div>
              <div>
                Gina is a Harvard graduate studying education and adolescent
                psychology
              </div>
            </div>
            <div>
              <Button onClick={() => router.push("/student/schedule")}>
                Schedule with Gina
              </Button>
              <Button onClick={() => router.push("/student/mentor-profile")}>
                More about me
              </Button>
            </div>
          </div>
        </main>
      </div>
        <Footer />
    </div>
  );
}