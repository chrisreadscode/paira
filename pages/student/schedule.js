import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import MentorCard from "../../components/MentorCard";
import MentorCardExpanded from "../../components/MentorCardExpanded";

export default function Schedule() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div
            id={styles.box}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1>Your Mentors</h1>
            <MentorCardExpanded />
            <MentorCard />
            <MentorCard />
          </div>

          {/* <h1 className={styles.title}>Thank You So Much!</h1>
            <div>
              We have received your submission and will reach out to your child
              shortly. We greatly appreciate your interest.
            </div>
            <div>
                In the meantime, please kindly see more about our website here <a href="https:/www.pairahealth.com">PAIRA</a>
            </div>
            <div>We hope you have a great day!</div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
