import Image from "next/image";
import styles from "../../styles/StudentsTab.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import Link from "next/link";

import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Students() {
    return (
        <><HeaderMentor />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    <div id={styles.mainBox}>
                        <div id={styles.topBox}>

                        </div>

                        <div id={styles.bottomBox}>
                            <h3 className={styles.title}>
                                Students

                                <div id={styles.mentees}>

                                    <Link href="/mentor/student">
                                        <div className={styles.menteeCard}>
                                            <div className={styles.mentee} style={{ height: "120px" }}>
                                                <Image alt="Mentee Profile Pic"
                                                    src="/profile-pic.png"
                                                    width="100px"
                                                    height="100px"
                                                ></Image>
                                                <p className={styles.subtitle}>Paul Sanjeet</p>
                                            </div>
                                            <p className={styles.menteeDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> Student</p>
                                        </div>

                                    </Link>

                                    <div className={styles.menteeCard}>
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

                                    <div className={styles.menteeCard}>
                                        <div className={styles.mentee} style={{ height: "120px" }}>
                                            <Image alt="Mentee Profile Pic"
                                                src="/profile-pic.png"
                                                width="100px"
                                                height="100px"
                                            ></Image>
                                            <p className={styles.subtitle}>Abbey Adams</p>
                                        </div>
                                        <p className={styles.menteeDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> Student</p>
                                    </div>


                                </div>


                            </h3>
                        </div>

                    </div>







                </main>

                <Footer />
            </div ></>
    );
}

// import _Head from "../../components/_Head";
// import Footer from "../../components/Footer";
// import HeaderMentor from "../../components/HeaderMentor";
// import InsightsMonthlyImprovements from "../../components/InsightsMonthlyImprovements";
// import InsightsTopStrengthsTopAreasOfGrowth from "../../components/InsightsTopStrengthsTopAreasOfGrowth";
// import styles from "../../styles/Default.module.css";
// import QuizCardSmall from "../../components/QuizCardSmall";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import MenuItem from "@mui/material/MenuItem";
// import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
// import OutlinedFlagSharpIcon from "@mui/icons-material/OutlinedFlagSharp";
// import Select from "@mui/material/Select";
// import { useState } from "react";

// export default function Students() {
//   const [studentName, setStudentName] = useState("Paul Sanjeet");

//   return (
//     <>
//       <_Head />
//       <HeaderMentor />
//       {/* styles.main interfering with other styles? */}
//       <main className={styles.container}>
//         <div id={styles.box}>
//           <div>
//             <OutlinedFlagSharpIcon />
//             Contact Guidance Counselor
//           </div>
//           <h2>Students</h2>
//           <Select
//             labelId="select-label"
//             onChange={(event) => {
//               setStudentName(event.target.value);
//             }}
//             value={studentName}
//           >
//             <MenuItem value="Paul Sanjeet">Paul Sanjeet</MenuItem>
//             <MenuItem value="Rebecca Flan">Rebecca Flan</MenuItem>
//             <MenuItem value="Jennifer Steele">Jennifer Steele</MenuItem>
//           </Select>
//           <div style={{ display: "flex" }}>
//             {/* Student Profile Card */}
//             <div style={{ display: "flex" }}>
//               <div>Student Img here</div>
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <div>{studentName}</div>
//                 <div>Frost High School</div>
//                 <div>
//                   <NoteAltOutlinedIcon />
//                   Notes
//                 </div>
//               </div>
//             </div>
//             {/* Assignments for the student */}
//             <div style={{ display: "flex" }}>
//               <ArrowBackIosIcon />
//               <QuizCardSmall />
//               <QuizCardSmall />
//               <QuizCardSmall />
//               <QuizCardSmall />
//               <ArrowForwardIosIcon />
//             </div>
//           </div>
//           {/* Bottom row */}
//           <div style={{ display: "flex" }}>
//             <InsightsTopStrengthsTopAreasOfGrowth />
//             <InsightsMonthlyImprovements />
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }