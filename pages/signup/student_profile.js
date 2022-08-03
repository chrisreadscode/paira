

import styles from "../../styles/Profile.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
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
                            height="150px"
                            id={styles.background}></Image>

                        <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image>

                        <div id={styles.profile}>
                            Paul Sanjeet, 14
                        </div>

                    </div>
                </main>

                <Footer />
            </div></>
    );
}