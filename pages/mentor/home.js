

import styles from "../../styles/Home.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Link from "next/link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MentorHomeMeeting from "../../components/MentorHomeMeeting";
import MentorHomeResources from "../../components/MentorHomeResources";


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
                        <MentorHomeMeeting name={"Paul Sanjeet"} imgTitle={"Mentee Profile Pic"}
                            img={"/profile-pic.png"} date={"July 12th"} time={"2:30pm"}></MentorHomeMeeting>

                        <MentorHomeMeeting name={"Nicole Tran"} imgTitle={"Mentee Profile Pic"}
                            img={"/profile-pic.png"} date={"July 14th"} time={"11:00am"}></MentorHomeMeeting>


                        <MentorHomeMeeting name={"Abbey Adams"} imgTitle={"Mentee Profile Pic"}
                            img={"/profile-pic.png"} date={"July 15th"} time={"1:00pm"}></MentorHomeMeeting>

                    </div>

                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Resources on Positive Psychology</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>

                        <MentorHomeResources link={"/course-content/sample-blog-post"} title={"How to Cultivate Self-Awareness"}
                            description={"Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness."}></MentorHomeResources>

                        <MentorHomeResources link={"/course-content/sample-blog-post"} title={"Finding Direction in Life"}
                            description={"Finding direction in life can feel like an overwhelming task, so many open paths. Learn how to navigate through this obstacle and find the right path for you."}></MentorHomeResources>

                        <MentorHomeResources link={"/course-content/sample-blog-post"} title={"Daily Motivation"}
                            description={"A step-by-step tutorial on finding out what motivates you. Begin with a questionnaire using awareness building tools."}></MentorHomeResources>

                        <MentorHomeResources link={"/course-content/sample-blog-post"} title={"The Basics of Time Management"}
                            description={"Balancing academics, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to avoid feeling overwhelmed."}></MentorHomeResources>

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
