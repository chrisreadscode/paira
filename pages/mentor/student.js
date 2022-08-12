

import Image from "next/image";
import styles from "../../styles/StudentsTab.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InsightsTopStrengthsTopAreasOfGrowth from "../../components/InsightsTopStrengthsTopAreasOfGrowth";
import InsightsMonthlyImprovements from "../../components/InsightsMonthlyImprovements";
import FlagIcon from '@mui/icons-material/Flag';
import NoteIcon from '@mui/icons-material/Note';
import Link from "next/link";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import AttachFileIcon from '@mui/icons-material/AttachFile';


export default function Student() {
    return (
        <><HeaderMentor />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    <div id={styles.mainBox} style={{ height: "830px" }}>
                        <div id={styles.topBox}>
                            <Link href="/mentor/students">
                                <div id={styles.back} style={{ float: "left" }}>
                                    <ArrowBackIosIcon />
                                    <p className={styles.verticalCenter}>Back</p>
                                </div>
                            </Link>

                            <div id={styles.back} style={{ float: "right", width: "270px" }}>
                                <FlagIcon />
                                <p className={styles.verticalCenter} style={{ marginLeft: "10px" }}>Contact Guidance Counselor</p>

                            </div>
                        </div>

                        <div id={styles.bottomBox}>
                            <div id={styles.menteeDetail}>
                                <div id={styles.menteeDetailTop}>

                                    <div id={styles.menteeProfile}>
                                        <Image alt="Mentee Profile Pic"
                                            src="/profile-pic.png"
                                            width="100px"
                                            height="100px"
                                            float="left"
                                            className={styles.verticalCenter}
                                        ></Image>
                                        <div id={styles.menteeInfo}>
                                            Paul Sanjeet
                                            <br></br>
                                            Frost High School
                                            <br></br>
                                            <div id={styles.notes}>
                                                <NoteIcon />
                                                <p style={{ margin: "0px", marginLeft: "5px" }}>Notes</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id={styles.assignedBox} style={{ marginLeft: "15px" }}>
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
                                </div>

                                <div id={styles.menteeDetailBotom}>
                                    <div id={styles.strength}>
                                        <InsightsTopStrengthsTopAreasOfGrowth />
                                    </div>
                                    <div id={styles.improvements}>
                                        <InsightsMonthlyImprovements />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>







                </main>

                <Footer />
            </div ></>
    );
}