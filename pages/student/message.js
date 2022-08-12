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
import { ToggleButton } from "@mui/material";
import {useState} from 'react';
import { Button } from "@mui/material";

export default function Message() {
    const [recepient, setRecepient ] = useState({name: "Gina Wee", title: "Personal Mentor"});

    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    <div id={styles.mainBox}>
                        <div id={styles.mentorSide}>
                            <div className={styles.mentorBox} onClick={(e) => setRecepient({name: "Gina Wee", title: "Personal Mentor"})}>
                            {/* <ToggleButton style={{border: "0", padding: "0", margin: "0"}}> */}
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
                            {/* </ToggleButton> */}
                            </div>

                            {/* <ToggleButton style={{border: "0", padding: "0", margin: "0", width: "100%"}}> */}
                            <div className={styles.mentorBox} onClick={(e) => setRecepient({name: "Tina Richards", title: "Time Management Mentor"})}>
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
                            {/* </ToggleButton> */}

                            {/* <ToggleButton style={{border: "0", padding: "0", margin: "0", width: "100%"}}> */}
                            <div className={styles.mentorBox} onClick={(e) => setRecepient({name: "John Lake", title: "Sleep Mentor"})}>
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
                            {/* </ToggleButton> */}
                        </div>

                        <div id={styles.messageSide}>
                            <div id={styles.messageTop}>
                                <h3 className={styles.mentorNames} style={{ fontWeight: "heavy", fontSize: "x-large" }}>{recepient.name}</h3>
                                <p style={{ color: "#7c7c7c" }}>{recepient.title}</p>
                            </div>
                            <div id={styles.messageBottom}>
                                <div style={{ height: "82%" }}>

                                </div>

                                <div style={{ display: "flex", alignItems: "flex-end", height: "18%", justifyContent: "flex-end"}}>
                                    <div id={styles.messageInput} style={{display: "flex", margin: "0 1vw 1vh 0"}}>
                                        <Button style={{alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <h3 id={styles.more}>+</h3>
                                        </Button>
                                        <Button style={{display: "flex"}}>
                                            <AttachFileIcon id={styles.attachFile} />
                                        </Button>
                                        <TextField id="message" variant="standard" placeholder="Message..." sx={{ width: '70%', paddingTop: "3px" }} />

                                        <Button>
                                            <h4 style={{ margin: "auto 20px" }}>Send</h4>
                                        </Button>
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

