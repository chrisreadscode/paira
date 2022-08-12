
import styles from "../../styles/Discoveralt.module.css";
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




export default function Discover() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main} style={{paddingBottom: "6vh"}}>

                    <div id={styles.search}>
                        <SearchIcon id={styles.searchIcon} />
                        <TextField id="searchText" variant="standard" placeholder="Search Resources" sx={{ width: '40%' }} />
                    </div>

                    <div id={styles.browseMentors}>
                        <p className={commonStyles.title} style={{ fontSize: "large" }}>
                            Browse for Mentors
                        </p>

                        <div id={styles.mentors}>
                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Sleeping Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <Link href="/student/choose-your-mentor">
                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                                </Link>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Time Management Coach</p>
                                <HotelIcon style={{ marginTop: "25.398px", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <Link href="/student/choose-your-mentor">
                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                                </Link>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Study Habits Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <Link href="/student/choose-your-mentor">
                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                                </Link>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Nutritions Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <Link href="/student/choose-your-mentor">
                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                                </Link>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Relationships Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <Link href="/student/choose-your-mentor">
                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div id={styles.recommendedResources}>
                        <p className={commonStyles.title} style={{ fontSize: "large", marginBottom: "30px" }}>
                            Recommended Resources
                        </p>

                        <div style={{ display: "flex" }}>
                            <Link href="/course-content/sample-blog-post">
                            <div className={styles.assignments} style={{ height: "300px" }}>
                                <div className={styles.imgContainer}></div>
                                <div className={styles.content}>
                                    <p style={{ margin: "0px" }}>How to Cultivate Self-Awareness</p>
                                    <div className={styles.articleSubtitle}>
                                        <MenuBookIcon className={styles.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Article</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                            <div className={styles.assignments} style={{ height: "300px" }}>
                                <div className={styles.imgContainer}></div>
                                <div className={styles.content}>
                                    <p style={{ margin: "0px" }}>Finding Direction in Life</p>
                                    <div className={styles.articleSubtitle}>
                                        <MenuBookIcon className={styles.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Article</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Finding direction in life can feel like an overwhelming task at times with so many options, so many open paths. Learn how to navigate through this obstacle and find the right path for you.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                            <div className={styles.assignments} style={{ height: "300px" }}>
                                <div className={styles.imgContainer}></div>
                                <div className={styles.content}>
                                    <p style={{ margin: "0px" }}>The Basics of Time Management</p>
                                    <div className={styles.articleSubtitle}>
                                        <MenuBookIcon className={styles.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Article</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Balancing school, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to time management and avoid feeling overwhelmed.</p>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>




                </main>

            </div >
            <Footer />
            </>
    );
}

// import _Head from "../../components/_Head";
// import BrowserForMentor from "../../components/BrowseForMentorCard";
// import Footer from "../../components/Footer";
// import HeaderStudent from "../../components/HeaderStudent";
// import RecommendedResources from "../../components/RecommendedResources";
// import styles from "../../styles/Default.module.css";
// import HandshakeIcon from "@mui/icons-material/Handshake";
// import HotelIcon from "@mui/icons-material/Hotel";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import SchoolIcon from "@mui/icons-material/School";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";

// export default function Sample() {
//   return (
//     <>
//       <_Head />
//       <HeaderStudent />
//       <main className={styles.container + " " + styles.main}>
//         {/* search bar */}
//         <TextField
//           InputProps={{ startAdornment: <SearchIcon /> }}
//           placeholder="Search Resources"
//         ></TextField>
//         {/* browser for mentors */}
//         <h2>Browser for Mentors</h2>
//         <div style={{ display: "flex" }}>
//           {BrowserForMentor({ icon: <HotelIcon />, title: "Sleeping Coach" })}
//           {BrowserForMentor({
//             icon: <ScheduleIcon />,
//             title: "Time Management Coach",
//           })}
//           {BrowserForMentor({
//             icon: <SchoolIcon />,
//             title: "Study Habits Coach",
//           })}
//           {BrowserForMentor({
//             icon: <RestaurantIcon />,
//             title: "Nutrition Coach",
//           })}
//           {BrowserForMentor({
//             icon: <HandshakeIcon />,
//             title: "Relationships Coach",
//           })}
//         </div>
//         {/* recommended resources */}
//         {RecommendedResources()}
//       </main>
//       <Footer />
//     </>
//   );
// }

// {
//   /* <div id={styles.box}> */
// }
