
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




export default function Schedule() {
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

// import Script from "next/script";
// import styles from "../../styles/Default.module.css";
// import _Head from "../../components/_Head.js";
// import HeaderStudent from "../../components/HeaderStudent.js";
// import Footer from "../../components/Footer.js";
// import MentorCard from "../../components/MentorCard";
// import MentorCardWide from "../../components/MentorCardWide";
// import { InlineWidget } from "react-calendly";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function Schedule() {
//   return (
//     <>
//       <_Head />
//       <HeaderStudent />
//       <div className={styles.container}>
//         <main
//           className={styles.main}
//           style={{ display: "flex", flexDirection: "row" }}
//         >
//           <div
//             id={styles.box}
//             style={{ display: "flex", flexDirection: "column" }}
//           >
//             <h1>Your Mentors</h1>
//             <MentorCardWide />
//             <MentorCard />
//             <MentorCard />
//           </div>
//           <div>
//             <ToggleButtonGroup>
//               <div>How long do you need?</div>
//               <div>
//                 <ToggleButton>30 mins</ToggleButton>
//                 <ToggleButton>1 hour</ToggleButton>
//               </div>
//             </ToggleButtonGroup>
//             {/* Please kindly remove the /meet in the link below to see the alternative calendly presentation */}
//             <InlineWidget url="https://calendly.com/rcreadii/meet" />
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }
