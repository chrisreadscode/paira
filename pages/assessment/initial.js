import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import _Head from "../../components/_Head.js";
import AssessmentQuestionSkillQuestion from "../../components/AssessmentQuestionSkillQuestion";
import AssessmentQuestionFiveRadioButtons from "../../components/AssessmentQuestionFiveRadioButtons";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Carousel from "react-material-ui-carousel";

export default function Initial() {
  const router = useRouter();

  const handleInitialAssessmentSubmit = async (event) => {
    event.preventDefault();

    // router.push("/signup/student-thank-you");
  };

  const skillQuestion = AssessmentQuestionSkillQuestion();

  const questions = [
    { id: "concrete-goal", question: "I have a concrete goal in life" },
    { id: "manage-time-effectively", question: "I manage my time effectively" },
    { id: "sleep-rest", question: "I get proper sleep/rest" },
  ];

  const radioButtonQuestions = questions.map((questionObject) =>
    AssessmentQuestionFiveRadioButtons(questionObject)
  );

  const submitButton = (
    <div key="submit" style={{ display: "flex", justifyContent: "center" }}>
      <button id={styles.button} key="submit">Next</button>
    </div>
  );

  const assessmentQuestions = [skillQuestion, ...radioButtonQuestions, submitButton];

  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {/* <div id={styles.box}> */}
          <form
            onSubmit={handleInitialAssessmentSubmit}
            style={{ width: "70vw" }}
          >
            <div>
              <h1 className={styles.title}>Quick Assessment</h1>
            </div>
            <Carousel
              autoPlay={false}
              cycleNavigation={false}
              id="fiveRadioButtonQuestionsContainer"
              navButtonsAlwaysVisible={true}
            >
              {assessmentQuestions}
            </Carousel>
          </form>
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
