import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function Initial() {
  const router = useRouter();

  const handleInitialAssessmentSubmit = async (event) => {
    event.preventDefault();

    router.push("/signup/student-thank-you");
  };

  const fiveRadioButtons = () => {
    return (
      <>
        <FormControlLabel
          control={<Radio />}
          label="Strongly Agree"
          labelPlacement="top"
          value="strongly-agree"
        />
        <FormControlLabel
          control={<Radio />}
          label="Agree"
          labelPlacement="top"
          value="agree"
        />
        <FormControlLabel
          control={<Radio />}
          label="Neutral"
          labelPlacement="top"
          value="neutral"
        />
        <FormControlLabel
          control={<Radio />}
          label="Disagree"
          labelPlacement="top"
          value="disagree"
        />
        <FormControlLabel
          control={<Radio />}
          label="Strongly Disagree"
          labelPlacement="top"
          value="strongly-disagree"
        />
      </>
    );
  };

  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {/* <div id={styles.box}> */}
          <form onSubmit={handleInitialAssessmentSubmit}>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <h1 className={styles.title}>Quick Assessment</h1>
              <button id={styles.button}>Next</button>
            </div>
            <div>
              <div>Select some skills you would like to learn</div>
              <label>
                <input name="time-management" type="checkbox"></input>
                <span>Time Management</span>
              </label>
              <label>
                <input name="direction-in-life" type="checkbox"></input>
                <span>Direction in Life</span>
              </label>
              <label>
                <input name="self-awareness" type="checkbox"></input>
                <span>Self-Awareness</span>
              </label>
              <label>
                <input name="growth-mindset" type="checkbox"></input>
                <span>Growth Mindset</span>
              </label>
              <label>
                <input name="resilience" type="checkbox"></input>
                <span>Resilience</span>
              </label>
              <label>
                <input name="critical-thinking" type="checkbox"></input>
                <span>Critical Thinking</span>
              </label>
              <label>
                <input name="perseverance" type="checkbox"></input>
                <span>Perseverance</span>
              </label>
              <label>
                <input name="Communication" type="checkbox"></input>
                <span>Communication</span>
              </label>
              <label>
                <span>Other</span>
                <input
                  name="other"
                  placeholder="Enter here"
                  type="textbox"
                ></input>
              </label>
            </div>
            <div>
              <FormLabel id="concrete-goal">
                I have a concrete goal in life
              </FormLabel>
              <RadioGroup name="concrete-goal" row={true}>
                {fiveRadioButtons()}
              </RadioGroup>
              <FormLabel id="manage-time-effectively">
                I manage my time effectively
              </FormLabel>
              <RadioGroup name="manage-time-effectively" row={true}>
                {fiveRadioButtons()}
              </RadioGroup>
              <FormLabel id="sleep-rest">
                I get proper sleep/rest
              </FormLabel>
              <RadioGroup name="sleep-rest" row={true}>
                {fiveRadioButtons()}
              </RadioGroup>
            </div>
          </form>
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
