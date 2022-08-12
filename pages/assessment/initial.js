import styles from "../../styles/Default.module.css";
import { useRouter } from "next/router";
import _Head from "../../components/_Head.js";
import AssessmentSubmitButton from "../../components/AssessmentSubmitButton";
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

  const assessmentQuestions = [
    skillQuestion,
    ...radioButtonQuestions,
    AssessmentSubmitButton(),
  ];

  return (
    <>
      <_Head />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <form
            // onSubmit={handleInitialAssessmentSubmit}
            style={{ height: "80vh", width: "70vw" }}
          >
            <div>
              <h1 className={styles.title}>Quick Assessment</h1>
            </div>
            <Carousel
              autoPlay={false}
              cycleNavigation={false}
              navButtonsAlwaysVisible={true}
            >
              {assessmentQuestions}
            </Carousel>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}>
</div> */
}
