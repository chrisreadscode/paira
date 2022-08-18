
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
import { InlineWidget } from "react-calendly";
import { ToggleButton } from "@mui/material";
import MentorCardNarrow from "../../components/MentorCardNarrow";
import MentorCardSchedule from "../../components/MentorCardSchedule";

export default function Schedule() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main} style={{ display: "flex", alignItems: "top", justifyContent: "center", paddingTop: "0" }}>
                    <div id={styles.mentorsBox} style={{ marginTop: "3.5vh" }}>
                        <h4 style={{ margin: "0px", marginBottom: "20px" }}>
                            Your Mentors
                        </h4>

                        {/* <ToggleButton styles={{border: "0", padding: "0", margin: "0", width: "100%"}}> */}
                        <MentorCardSchedule imgTitle={"Mentor Profile Pic"} img={"/mentor-profile-pic.png"}
                            mentorName={"Gina Wee"} mentorDescription={"Personal Mentor"}></MentorCardSchedule>
                        {/* </ToggleButton> */}

                        {/* <ToggleButton styles={{border: "0", padding: "0", margin: "0", width: "100%"}}> */}
                        <MentorCardSchedule imgTitle={"Mentor Profile Pic"} img={"/mentor-profile-pic.png"}
                            mentorName={"Tina Richards"} mentorDescription={"Time Management Mentor"}></MentorCardSchedule>
                        {/* </ToggleButton> */}

                        {/* <ToggleButton styles={{border: "0", padding: "0", margin: "0", width: "100%"}}> */}
                        <MentorCardSchedule imgTitle={"Mentor Profile Pic"} img={"/mentor-profile-pic.png"}
                            mentorName={"John Lake"} mentorDescription={"Sleep Mentor"}></MentorCardSchedule>
                        {/* </ToggleButton> */}
                        
                    </div>

                    {/* <div id={styles.scheduleBox}>
                    </div> */}
                    <div>
                        <InlineWidget styles={{ height: "100vh", padding: "0", margin: "0", width: "70vw" }} url="https://calendly.com/rcreadii/" />
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
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }
