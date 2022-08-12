import _Head from "../../components/_Head";
import AssessmentSubmitButton from "../../components/AssessmentSubmitButton";
import AssessmentQuestionFiveRadioButtons from "../../components/AssessmentQuestionFiveRadioButtons";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Default.module.css";
import Carousel from "react-material-ui-carousel";

export default function TimeManagement() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      {/*styles.main changes the style of the carousel more seriously */}
      <main className={styles.container} style={{display: "flex", justifyContent: "center"}}>
        <form
          // onSubmit={handleInitialAssessmentSubmit}
          style={{ height: "80vh", width: "70vw" }}
        >
          <Carousel
            autoPlay={false}
            cycleNavigation={false}
            id="fiveRadioButtonQuestionsContainer"
            navButtonsAlwaysVisible={true}
          >
            {AssessmentQuestionFiveRadioButtons({
              id: "self-rating-time-tracking",
              question: "I keep good track of time",
            })}
            {AssessmentSubmitButton()}
          </Carousel>
        </form>
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}
