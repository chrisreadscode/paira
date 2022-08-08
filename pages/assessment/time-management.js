import _Head from "../../components/_Head";
import AssessmentQuestionFiveRadioButtons from "../../components/AssessmentQuestionFiveRadioButtons";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Login.module.css";

export default function TimeManagement() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        {AssessmentQuestionFiveRadioButtons({
          id: "self-rating-time-tracking",
          question: "I keep good track of time",
        })}
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}
