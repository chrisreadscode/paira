

import styles from "../../styles/Home.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Assignment from '../../components/Assignment.js'
import MentorCardNarrow from "../../components/MentorCardNarrow";

export default function Home() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main}>
                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Upcoming Assignments</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>
                        <Link href="/student/schedule">

                            <Assignment img={"/time-management.jpg"} imgTitle={"Time Management Image"} title={"Schedule your next session"}
                                type={" "} duration={" "} details={"5 more session left to schedule until July 20th"} showIcons={false}
                            >
                            </Assignment>
                        </Link>

                        <Link href="/course-content/sample-video">
                            <Assignment img={"/time-management.jpg"} imgTitle={"Time Management Image"} title={"Self-Care Vision Board"}
                                type={"Exercise"} duration={"60 minute practice"} details={"In this activity, learn to increase self-compassion through fun and playful creativity."}

                            >
                            </Assignment>
                        </Link>

                        <Link href="/course-content/sample-blog-post">
                            <Assignment img={"/time-management.jpg"} imgTitle={"Time Management Image"} title={"Positive Reminiscence"}
                                type={"Exercise"} duration={"5-10 minute practice"} details={"In this activity, learn to help clients cultivate positive emotions through savoring."}
                            >
                            </Assignment>
                        </Link>

                    </div>

                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Your Mentors</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>
                        <div className={styles.mentorClicked} style={{ marginLeft: "20px" }}>
                            <div className={styles.mentorCard} style={{ float: "left" }}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="100px"
                                    height="100px"
                                ></Image>
                                Gina Wee
                                <p className={styles.mentorDescription}> Personal Mentor</p>
                            </div>
                            <div>
                                <div style={{ borderLeft: "1px solid", height: "152px", float: "left", margin: "0px 20px" }}></div>
                                <p className={styles.mentorDescription}> Harvard graduate studying education and adolescent psychology</p>

                                <div style={{ width: "261px", marginBottom: "70px" }}>
                                    <CalendarTodayIcon className={styles.icon} />
                                    <div id={styles.sessions}>No Sessions</div>
                                </div>

                                <div>
                                    <div className={styles.link} style={{ float: "left" }}>
                                        <Link href="/student/schedule">
                                            Schedule now
                                        </Link>

                                    </div>
                                    <div className={styles.link} style={{ float: "right" }}>
                                        <Link href="/student/message">
                                            Send a Message
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MentorCardNarrow imgTitle={"Mentor Profile Pic"} img={"/mentor-profile-pic.png"}
                            mentorName={"Tina Richards"} mentorDescription={"Time Management Mentor"}>
                        </MentorCardNarrow>

                        <MentorCardNarrow imgTitle={"Mentor Profile Pic"} img={"/mentor-profile-pic.png"}
                            mentorName={"Gina Wee"} mentorDescription={"Sleep Mentor"}>
                        </MentorCardNarrow>
                    </div>


                </main>


            </div >
            <Footer />
        </>
    );
}
