

import styles from "../../styles/Homealt.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';


export default function Home() {
    return (
        <>
            <_Head />
            <HeaderMentor />
            <div className={commonStyles.container}>
                <main className={commonStyles.main}>
                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Upcoming Meetings</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>

                        <div className={styles.menteeBox}>
                            <div>
                                <p className={styles.menteeName}>Paul Sanjeet</p>
                                <div className={styles.menteePic}>
                                    <Image alt="Mentee Profile Pic"
                                        src="/profile-pic.png"
                                        width="50px"
                                        height="50px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.meetingDescription}>
                                <p style={{ margin: "0px", marginBottom: "10px" }}>Date: July 12th</p>
                                <p style={{ margin: "0px" }}>Time: 2:30pm</p>
                            </div>

                            <hr></hr>

                            <div>
                                <Link href="/mentor/schedule">
                                    <div className={styles.buttons} style={{ float: "left" }}>
                                        Join Meeting
                                    </div>
                                </Link>
                                <Link href="/mentor/message">
                                    <div className={styles.buttons} style={{ float: "right" }}>
                                        Message
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.menteeBox}>
                            <div>
                                <p className={styles.menteeName}>Nicole Tran</p>
                                <div className={styles.menteePic}>
                                    <Image alt="Mentee Profile Pic"
                                        src="/profile-pic.png"
                                        width="50px"
                                        height="50px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.meetingDescription}>
                                <p style={{ margin: "0px", marginBottom: "10px" }}>Date: July 14th</p>
                                <p style={{ margin: "0px" }}>Time: 11:00am</p>
                            </div>

                            <hr></hr>

                            <div>
                                <div className={styles.buttons} style={{ float: "left" }}>
                                    Join Meeting
                                </div>

                                <div className={styles.buttons} style={{ float: "right" }}>
                                    Message
                                </div>
                            </div>
                        </div>


                        <div className={styles.menteeBox}>
                            <div>
                                <p className={styles.menteeName}>Abbey Adams</p>
                                <div className={styles.menteePic}>
                                    <Image alt="Mentee Profile Pic"
                                        src="/profile-pic.png"
                                        width="50px"
                                        height="50px"
                                    ></Image>
                                </div>
                            </div>

                            <div className={styles.meetingDescription}>
                                <p style={{ margin: "0px", marginBottom: "10px" }}>Date: July 15th</p>
                                <p style={{ margin: "0px" }}>Time: 1:00pm</p>
                            </div>

                            <hr></hr>

                            <div>
                                <div className={styles.buttons} style={{ float: "left" }}>
                                    Join Meeting
                                </div>

                                <div className={styles.buttons} style={{ float: "right" }}>
                                    Message
                                </div>
                            </div>
                        </div>

                    </div>







                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Resources on Positive Psychology</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>

                        <Link href="/course-content/sample-blog-post">
                            <div className={styles.resources}>
                                <div className={styles.imgContainer} style={{ height: "40%" }}>
                                </div>

                                <div className={styles.content} style={{ height: "60%" }}>
                                    <div className={styles.assignmentTitle}>
                                        How to Cultivate Self-Awareness

                                        <div style={{ height: "22px" }}>
                                            <MenuBookIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                            <p className={styles.assignmentDescription}>Article</p>
                                        </div>
                                    </div>
                                    <p className={styles.assignmentDetails} style={{ paddingTop: "10px" }}> Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness.</p>
                                </div>
                            </div>
                        </Link>

                        <div className={styles.resources}>
                            <div className={styles.imgContainer} style={{ height: "40%" }}>
                            </div>
                            <div className={styles.content} style={{ height: "60%" }}>
                                <div className={styles.assignmentTitle}>
                                    Finding Direction in Life

                                    <div style={{ height: "22px" }}>
                                        <MenuBookIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                        <p className={styles.assignmentDescription}>Article</p>
                                    </div>
                                </div>
                                <p className={styles.assignmentDetails} style={{ paddingTop: "10px" }}> Finding direction in life can feel like an overwhelming task, so many open paths. Learn how to navigate through this obstacle and find the right path for you.</p>
                            </div>
                        </div>


                        <div className={styles.resources}>
                            <div className={styles.imgContainer} style={{ height: "40%" }}>
                            </div>


                            <div className={styles.content} style={{ height: "60%" }}>
                                <div className={styles.assignmentTitle}>
                                    Daily Motivation

                                    <div style={{ height: "22px" }}>
                                        <MenuBookIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                        <p className={styles.assignmentDescription}>Article</p>
                                    </div>
                                </div>
                                <p className={styles.assignmentDetails} style={{ paddingTop: "10px" }}> A step-by-step tutorial on finding out what motivates you. Begin with a questionnaire using awareness building tools.</p>
                            </div>
                        </div>


                        <div className={styles.resources}>
                            <div className={styles.imgContainer} style={{ height: "40%" }}>
                            </div>


                            <div className={styles.content} style={{ height: "60%" }}>
                                <div className={styles.assignmentTitle}>
                                    The Basics of Time Management

                                    <div style={{ height: "22px" }}>
                                        <MenuBookIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                                        <p className={styles.assignmentDescription}>Article</p>
                                    </div>
                                </div>
                                <p className={styles.assignmentDetails} style={{ paddingTop: "10px" }}> Balancing academics, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to avoid feeling overwhelmed.</p>
                            </div>
                        </div>

                    </div>


                </main>

            </div >
            <Footer />
        </>
    );
}

// import styles from "../../styles/Default.module.css";
// import _Head from "../../components/_Head.js";
// import AssignmentCard from "../../components/AssignmentCard";
// import Footer from "../../components/Footer.js";
// import HeaderMentor from "../../components/HeaderMentor.js";
// import MeetingCard from "../../components/MeetingCard";
// import { Divider } from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import MentorCardWide from "../../components/MentorCardWide";
// import MentorCard from "../../components/MentorCard";

// export default function Home() {
//   return (
//     <>
//       <_Head />
//       <HeaderMentor />
//       {/* <div className={styles.container}> */}
//       <main className={styles.main}>
//         <div id="upcoming-assignments-container">
//           <h2>Upcoming Meetings</h2>
//           <div style={{ display: "flex" }}>
//             <ArrowBackIosIcon />
//             <ArrowForwardIosIcon />
//           </div>
//           <div style={{ display: "flex" }}>
//             <MeetingCard />
//             <MeetingCard />
//             <MeetingCard />
//           </div>
//         </div>
//         <Divider></Divider>
//         <div id="resources-container">
//           <div style={{ display: "flex" }}>
//             <h2>Resources on Positive Psychology</h2>
//             <div>
//               <ArrowBackIosIcon />
//               <ArrowForwardIosIcon />
//             </div>
//           </div>
//           <div style={{ display: "flex" }}>
//             <AssignmentCard />
//             <AssignmentCard />
//             <AssignmentCard />
//             <AssignmentCard />
//           </div>
//         </div>
//       </main>
//       <Footer />
//       {/* </div> */}
//     </>
//   );
// }
