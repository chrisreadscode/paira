

import styles from "../../styles/Homealt.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";

export default function StudentProfile() {
    return (
        <><HeaderStudent />
            <div className={styles.container}>
                <_Head />
                <main className={styles.main}>
                    <div id={styles.upcomingAssignment}>
                        <h2 className={styles.title}>Upcoming Assignments</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>
                        <div className={styles.assignments} style={{ marginLeft: "20px" }}>
                            <div className={styles.imgContainer}>
                                <div id={styles.img1}>
                                    <Image alt="Time Management Image"
                                        src="/time-management.jpg"
                                        width="350px"
                                        height="200px"
                                    ></Image>
                                </div>

                                <div className={styles.content} style={{ position: "absolute", top: "250px" }}>
                                    Schedule your next session
                                </div>
                            </div>
                        </div>
                        <div className={styles.assignments}>
                            <div className={styles.imgContainer}>

                            </div>
                            <div className={styles.content} style={{ position: "absolute", top: "250px" }}>
                                Self-care Vision Board
                            </div>
                        </div>

                        <div className={styles.assignments}>
                            <div className={styles.imgContainer}>

                            </div>
                            <div className={styles.content} style={{ position: "absolute", top: "250px" }}>
                                Positive Reminiscence
                            </div>
                        </div>
                    </div>

                    <hr></hr>


                    <div id={styles.upcomingAssignment}>
                        <h2 className={styles.title}>Your Mentors</h2>
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
                                <div style={{ borderLeft: "1px solid", height: "100px", float: "left" }}></div>
                            </div>



                        </div>

                        <div className={styles.mentor}>

                        </div>

                        <div className={styles.mentor}>

                        </div>
                    </div>


                </main>

                <Footer />
            </div ></>
    );
}