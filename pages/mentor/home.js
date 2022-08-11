import styles from "../../styles/Default.module.css";
import _Head from "../../components/_Head.js";
import AssignmentCard from "../../components/AssignmentCard";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import MeetingCard from "../../components/MeetingCard";
import { Divider } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MentorCardWide from "../../components/MentorCardWide";
import MentorCard from "../../components/MentorCard";

export default function Home() {
  return (
    <>
      <_Head />
      <HeaderMentor />
      {/* <div className={styles.container}> */}
      <main className={styles.main}>
        <div id="upcoming-assignments-container">
          <h2>Upcoming Meetings</h2>
          <div style={{ display: "flex" }}>
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
          </div>
          <div style={{ display: "flex" }}>
            <MeetingCard />
            <MeetingCard />
            <MeetingCard />
          </div>
        </div>
        <Divider></Divider>
        <div id="resources-container">
          <div style={{ display: "flex" }}>
            <h2>Resources on Positive Psychology</h2>
            <div>
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
          </div>
        </div>
      </main>
      <Footer />
      {/* </div> */}
    </>
  );
}
