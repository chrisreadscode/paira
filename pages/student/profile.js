

import styles from "../../styles/Profile.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import MentorCardNarrow from "../../components/MentorCardNarrow.js";
import Link from 'next/link';
import QuizIcon from '@mui/icons-material/Quiz';
import { useState } from 'react';

export default function StudentProfile() {
    const [editOn, setEditOn] = useState(false);
    const [education, setEducation] = useState('Frost High School');
    const [email, setEmail] = useState('paulsanjeet@frosths.edu');
    const [location, setLocation] = useState('Boston, Massachusetts');

    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container} id={styles.profileStudent}>
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
                                            onClick={() => setEditOn(!editOn)}
                                        > </EditIcon>
                                    </div>
                                </div>
                                <br></br>
                                <h4 style={{ margin: "0px" }}>---</h4>
                                {editOn ? <input type="text" className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }} value={location} onChange={(event) => setLocation(event.target.value)} />
                                    : <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>{location}</p>}

                                <p id={styles.education} className={styles.fontLarge}>Education</p>

                                {editOn ? <input className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6", width: "50%" }} type="text" value={education} onChange={(event) => setEducation(event.target.value)} /> :
                                    <div className={styles.textBox} style={{ width: "50%" }}>
                                        <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                            {education}
                                        </p>
                                    </div>}


                                <p id={styles.email} className={styles.fontLarge}>Email</p>
                                {editOn ? <input className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6", width: "50%" }} type="text" value={email} onChange={(event) => setEmail(event.target.value)} /> : <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                        {email}
                                    </p>
                                </div>}
                            </div>
                        </div>

                        {/* The box on the right part of the screen */}
                        <div id={styles.sideBox}>
                            <p className={styles.subtitle}>Assigned Resources</p>

                            <div id={styles.assignedBox} style={{ marginLeft: "15px", height: "33%" }}>
                                <Link href="/assessment/time-management">
                                    <div className={`${styles.studentAssignment} ${styles.pointer}`} style={{ display: "flex", flexDirection: "column" }}>
                                        Self-Awareness Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                                <Link href="/assessment/time-management">
                                    <div className={styles.studentAssignment} style={{ display: "flex", flexDirection: "column" }}>
                                        Grit Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                                <Link href="/assessment/time-management">
                                    <div className={styles.studentAssignment} style={{ display: "flex", flexDirection: "column" }}>
                                        Personality Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                            </div>


                            <p className={styles.subtitle} style={{ marginTop: "50px" }}>Current Mentors</p>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Link href="/student/message" >
                                    <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                        <div className={styles.mentorImg}>
                                        </div>
                                        Gina Wee
                                        <p className={styles.mentorDescription}>Personal Mentor</p>
                                    </div>
                                </Link>
                                <Link href="/student/message" >
                                    <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                        <div className={styles.mentorImg}>
                                        </div>
                                        Tina Richards
                                        <p className={styles.mentorDescription}>Time Management Mentor</p>
                                    </div>
                                </Link>
                                <Link href="/student/message" >
                                    <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                                        <div className={styles.mentorImg}>
                                        </div>
                                        John Lake
                                        <p className={styles.mentorDescription}>Sleep Mentor</p>
                                    </div>
                                </Link>
                            </div>


                        </div>


                    </div>

                </main>

            </div >
            <Footer />
        </>
    );
}