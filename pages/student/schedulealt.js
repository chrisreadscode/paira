
import styles from "../../styles/Schedulealt.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from "next/image";
import Link from "next/link";




export default function Schedulealt() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main} style={{ paddingTop: "40px", marginBottom: "50px" }}>
                    <div id={styles.mentorsBox}>
                        <h4 style={{ margin: "0px", marginBottom: "20px" }}>
                            Your Mentors
                        </h4>

                        <div className={styles.mentor}>
                            <div className={styles.mentorCard}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="80px"
                                    height="80px"
                                ></Image>
                                <p style={{ margin: "0px" }}>Gina Wee</p>
                                <p className={styles.mentorDescription}> Personal Mentor</p>
                            </div>
                        </div>

                        <div className={styles.mentor}>
                            <div className={styles.mentorCard}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="80px"
                                    height="80px"
                                ></Image>
                                <p style={{ margin: "0px" }}>Tina Richards</p>
                                <p className={styles.mentorDescription}> Time Management Mentor</p>
                            </div>
                        </div>

                        <div className={styles.mentor}>
                            <div className={styles.mentorCard}>
                                <Image alt="Mentor Profile Pic"
                                    src="/mentor-profile-pic.png"
                                    width="80px"
                                    height="80px"
                                ></Image>
                                <p style={{ margin: "0px" }}>John Lake</p>
                                <p className={styles.mentorDescription}> Sleep Mentor</p>
                            </div>
                        </div>
                    </div>

                    <div id={styles.scheduleBox}>

                    </div>

                </main>

            </div >
        <Footer />
        </>
    );
}