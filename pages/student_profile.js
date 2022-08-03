

import styles from "../styles/Profile.module.css";
import _Head from "../components/_Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Image from "next/image";

export default function StudentProfile() {
    return (
        <><Header />
            <div className={styles.container}>
                <_Head />
                <main className={styles.main}>

                    <div id={styles.mainBox}>
                        <Image alt="Background Image"
                            src="/background.jpeg"
                            width="745px"
                            height="100px"
                            id={styles.background}></Image>

                        {/* <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image> */}

                        <div id={styles.profile}>
                            <h4 id={styles.title}>Paul Sanjeet, 14</h4>
                            <h4 style={{ margin: "0px" }}>---</h4>
                            <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>Boston, Massachusetts</p>

                            <p id={styles.education} className={styles.fontLarge}>Education</p>
                            <div className={styles.textBox} style={{ width: "50%" }}>
                                <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                                    Frost High School
                                </p>
                            </div>

                            <p id={styles.email} className={styles.fontLarge}>Email</p>
                            <div className={styles.textBox} style={{ width: "50%" }}>
                                <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                                    paulsanjeet@frosths.edu
                                </p>
                            </div>
                        </div>

                    </div>

                    <div id={styles.sideBox}>
                    </div>

                </main>

                <Footer />
            </div></>
    );
}