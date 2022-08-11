import Script from "next/script";
import styles from "../../styles/Default.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import MentorCard from "../../components/MentorCard";
import MentorCardWide from "../../components/MentorCardWide";
import { InlineWidget } from "react-calendly";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Schedule() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <div className={styles.container}>
        <main
          className={styles.main}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            id={styles.box}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1>Your Mentors</h1>
            <MentorCardWide />
            <MentorCard />
            <MentorCard />
          </div>
          <div>
            <ToggleButtonGroup>
              <div>How long do you need?</div>
              <div>
                <ToggleButton>30 mins</ToggleButton>
                <ToggleButton>1 hour</ToggleButton>
              </div>
            </ToggleButtonGroup>
            {/* Please kindly remove the /meet in the link below to see the alternative calendly presentation */}
            <InlineWidget url="https://calendly.com/rcreadii/meet" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
