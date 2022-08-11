

import styles from "../../styles/Profile.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import MentorCardNarrow from "../../components/MentorCardNarrow.js";

export default function StudentProfile() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    {/* Div so that mainBox and sideBox are side by side */}
                    <div style={{ width: "100%" }}>
                        {/* The box on the left part of the screen */}
                        <div id={styles.mainBox}>
                            <Image alt="Background Image"
                                src="/background.jpeg"
                                width="822px"
                                height="100px"
                                id={styles.background}></Image>

                            {/* <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image> */}

                            <div id={styles.profile}>
                                <div style={{ width: "100%" }}>
                                    <h4 id={styles.title} style={{ float: "left" }}>Paul Sanjeet</h4>

                                    <div id={styles.icon}>
                                        <EditIcon alt="Edit Icon"
                                            src="/edit-icon.png"
                                            width="20px"
                                            height="20px"
                                        > </EditIcon>
                                    </div>
                                </div>
                                <br></br>
                                <h4 style={{ margin: "0px" }}>---</h4>
                                <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>Boston, Massachusetts</p>

                                <p id={styles.education} className={styles.fontLarge}>Education</p>
                                <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                        Frost High School
                                    </p>
                                </div>

                                <p id={styles.email} className={styles.fontLarge}>Email</p>
                                <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                        paulsanjeet@frosths.edu
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The box on the right part of the screen */}
                        <div id={styles.sideBox}>
                            <p className={styles.subtitle}>Assigned Resources</p>

                            <div id={styles.assignedBox} style={{ marginLeft: "15px", height: "33%" }}>
                                <div className={styles.studentAssignment}>
                                    Self-Awareness
                                </div>
                                <div className={styles.studentAssignment}>
                                    Grit Quiz
                                </div>
                                <div className={styles.studentAssignment}>
                                    Personality Quiz
                                </div>

                            </div>


                            <p className={styles.subtitle} style={{ marginTop: "50px" }}>Current Mentors</p>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                    <div className={styles.mentorImg}>
                                    </div>
                                    Gina Wee
                                    <p className={styles.mentorDescription}>Personal Mentor</p>
                                </div>
                                <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                    <div className={styles.mentorImg}>
                                    </div>
                                    Tina Richards
                                    <p className={styles.mentorDescription}>Time Management Mentor</p>
                                </div>
                                <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                    <div className={styles.mentorImg}>
                                    </div>
                                    John Lake
                                    <p className={styles.mentorDescription}>Sleep Mentor</p>
                                </div>
                            </div>


                        </div>


                    </div>

                </main>

            </div >
        <Footer />
        </>
    );
}