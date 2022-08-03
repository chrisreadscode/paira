import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import AssignmentCard from "../../components/AssignmentCard";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import { Divider } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MentorCardExpanded from "../../components/MentorCardExpanded";
import MentorCard from "../../components/MentorCard";

export default function Home() {
  return (
    <div>
      <_Head />
      <HeaderStudent />
      {/* <div className={styles.container}> */}
      <main className={styles.main}>
        <div id="upcoming-assignments-container">
          <h2>Upcoming Assignments</h2>
          <div style={{ display: "flex" }}>
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
          </div>
          <div style={{ display: "flex" }}>
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
          </div>
        </div>
        <Divider></Divider>
        <div id="your-mentors-container">
          <h2>Your Mentors</h2>
          <div>Explore Mentors</div>
          <ArrowForwardIosIcon />
          <div style={{ display: "flex" }}>
            <MentorCardExpanded />
            <MentorCard />
          </div>
        </div>
      </main>
      <Footer />
      {/* </div> */}
    </div>
  );
}
