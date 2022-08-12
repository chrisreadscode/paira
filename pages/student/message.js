import Image from "next/image";
import styles from "../../styles/Message.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Message() {
    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    <div id={styles.mainBox}>
                        <div id={styles.mentorSide}>
                            <div className={styles.mentorBox}>
                                <Image alt="Profile Picture"
                                    src="/mentor-profile-pic.png"
                                    width="55px"
                                    height="55px"
                                ></Image>
                                <div style={{ width: "8%", height: "100%" }}></div>
                                <div className={styles.mentorDescription}>
                                    <h3 className={styles.mentorNames}>Gina Wee</h3>
                                    <p className={styles.mentorNames} style={{ fontSize: "small", color: "#7c7c7c" }}> Personal Mentor</p>
                                </div>
                            </div>

                            <div className={styles.mentorBox}>
                                <Image alt="Profile Picture"
                                    src="/mentor-profile-pic.png"
                                    width="55px"
                                    height="55px"
                                ></Image>
                                <div style={{ width: "8%", height: "100%" }}></div>
                                <div className={styles.meentorDescription}>
                                    <h3 className={styles.mentorNames}>Tina Richards</h3>
                                    <p className={styles.mentorNames} style={{ fontSize: "small", color: "#7c7c7c" }}> Time Management <br></br> Mentor</p>
                                </div>
                            </div>

                            <div className={styles.mentorBox}>
                                <Image alt="Profile Picture"
                                    src="/mentor-profile-pic.png"
                                    width="55px"
                                    height="55px"
                                ></Image>
                                <div style={{ width: "8%", height: "100%" }}></div>
                                <div className={styles.meentorDescription}>
                                    <h3 className={styles.mentorNames}>John Lake</h3>
                                    <p className={styles.mentorNames} style={{ fontSize: "small", color: "#7c7c7c" }}> Sleep Mentor</p>
                                </div>
                            </div>
                        </div>

                        <div id={styles.messageSide}>
                            <div id={styles.messageTop}>
                                <h3 className={styles.mentorNames} style={{ fontWeight: "heavy", fontSize: "x-large" }}> Gina Wee</h3>
                                <p style={{ color: "#7c7c7c" }}> Personal Mentor</p>
                            </div>
                            <div id={styles.messageBottom}>
                                <div style={{ height: "82%" }}>

                                </div>

                                <div style={{ height: "18%" }}>
                                    <div id={styles.messageInput}>
                                        <h3 id={styles.more}>+</h3>
                                        <AttachFileIcon id={styles.attachFile} />
                                        <TextField id="message" variant="standard" placeholder="Message..." sx={{ width: '70%' }} />

                                        <h4 style={{ margin: "auto 20px" }}>Send</h4>
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

// import _Head from "../../components/_Head.js";
// import Footer from "../../components/Footer.js";
// import HeaderStudent from "../../components/HeaderStudent";
// import MessageMain from "../../components/MessageMain";
// import styles from "../../styles/Default.module.css";

// export default function Message() {
//   return (
//     <>
//       <_Head />
//       <HeaderStudent />
//       <div className={styles.container}>
//         <main className={styles.main}>
//           <MessageMain />
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

