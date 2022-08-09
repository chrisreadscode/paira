

import styles from "../../styles/Homealt.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';



export default function StudentProfile() {
    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main}>
                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Upcoming Assignments</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>



                        <div className={commonStyles.assignments} style={{ marginLeft: "20px", height: "300px" }}>
                            <div className={styles.imgContainer}>
                                <div id={styles.img1}>
                                    <Image alt="Time Management Image"
                                        src="/time-management.jpg"
                                        width="396px"
                                        height="300px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.assignmentTitle}>
                                    Schedule your next session
                                </div>
                                <p className={styles.assignmentDetails}>5 more session left to schedule until July 20th</p>
                            </div>
                        </div>


                        <div className={commonStyles.assignments} style={{ marginLeft: "20px", height: "300px" }}>
                            <div className={styles.imgContainer}>
                                <div id={styles.img1}>
                                    <Image alt="Time Management Image"
                                        src="/time-management.jpg"
                                        width="396px"
                                        height="300px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.assignmentTitle}>
                                    Self-Care Vision Board

                                    <div style={{ height: "22px" }}>
                                        <AccessTimeIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                        <p className={styles.assignmentDescription}>Exercise  ·  60 minute practice</p>
                                    </div>
                                </div>
                                <p className={styles.assignmentDetails}> In this activity, learn to increase self-compassion through fun and playful creativity.</p>
                            </div>
                        </div>





                        <div className={commonStyles.assignments} style={{ marginLeft: "20px", height: "300px" }}>
                            <div className={styles.imgContainer}>
                                <div id={styles.img1}>
                                    <Image alt="Time Management Image"
                                        src="/time-management.jpg"
                                        width="396px"
                                        height="300px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.assignmentTitle}>
                                    Positive Reminiscence

                                    <div style={{ height: "22px" }}>
                                        <AccessTimeIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                        <p className={styles.assignmentDescription}>Exercise  ·  5-10 minute practice</p>
                                    </div>
                                </div>
                                <p className={styles.assignmentDetails}>  In this activity, learn to help clients cultivate positive emotions through savoring.</p>
                            </div>
                        </div>

                    </div>

                    <hr></hr>


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

                        <div className={styles.mentor}>
                            <div className={styles.mentorCard} style={{ height: "120px" }}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="100px"
                                    height="100px"
                                ></Image>
                                Tina Richards

                            </div>
                            <p className={styles.mentorDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> Time Management Mentor</p>

                        </div>

                        <div className={styles.mentor}>
                            <div className={styles.mentorCard}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="100px"
                                    height="100px"
                                ></Image>
                                Gina Wee
                                <p className={styles.mentorDescription}> Sleep Mentor</p>
                            </div>

                        </div>
                    </div>


                </main>

                <Footer />
            </div ></>
    );
}