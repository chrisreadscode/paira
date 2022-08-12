

import Image from "next/image";
import styles from "../../styles/StudentsTab.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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

                    <div id={styles.mainBox} style={{ height: "650px" }}>
                        <div id={styles.topBox}>
                            <div id={styles.back}>
                                <ArrowBackIosIcon />
                                <p className={styles.verticalCenter}>Back</p>
                            </div>
                        </div>

                        <div id={styles.bottomBox}>
                            <div id={styles.menteeDetail}>
                                <div id={styles.menteeDetailTop}>

                                    <div className={styles.menteeCard} style={{ display: "flex" , width: "25%"}}>
                                        <div className={styles.mentee} style={{ height: "120px" }}>
                                            <Image alt="Mentee Profile Pic"
                                                src="/profile-pic.png"
                                                width="100px"
                                                height="100px"
                                            ></Image>
                                            <p className={styles.subtitle}>Nicole Tran</p>
                                        </div>
                                        <p className={styles.menteeDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> Student</p>
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