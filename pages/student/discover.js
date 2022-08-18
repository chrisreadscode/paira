
import styles from "../../styles/Discover.module.css";
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
import FindMentor from "../../components/FindMentor.js";
import ArticleResource from "../../components/ArticleResource";



export default function Discover() {
    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container}>
                <main className={commonStyles.main} style={{ paddingBottom: "6vh" }}>

                    <div id={styles.search}>
                        <SearchIcon id={styles.searchIcon} />
                        <TextField id="searchText" variant="standard" placeholder="Search Resources" sx={{ width: '40%' }} />
                    </div>

                    <div id={styles.browseMentors}>
                        <p className={commonStyles.title} style={{ fontSize: "large" }}>
                            Browse for Mentors
                        </p>

                        <div id={styles.mentors}>
                            <FindMentor mentorDescription={"Sleep Mentor"}
                                icon={<HotelIcon style={{ marginLeft: "70%", marginBottom: "15px" }} />}>
                            </FindMentor>

                            <FindMentor mentorDescription={"Time Management Mentor"}
                                icon={<HotelIcon style={{ marginLeft: "70%", marginBottom: "15px" }} />}>
                            </FindMentor>

                            <FindMentor mentorDescription={"Study Habits Coach"}
                                icon={<HotelIcon style={{ marginLeft: "70%", marginBottom: "15px" }} />}>
                            </FindMentor>

                            <FindMentor mentorDescription={"Nutritions Coach"}
                                icon={<HotelIcon style={{ marginLeft: "70%", marginBottom: "15px" }} />}>
                            </FindMentor>

                            <FindMentor mentorDescription={"Relationships Coach"}
                                icon={<HotelIcon style={{ marginLeft: "70%", marginBottom: "15px" }} />}>
                            </FindMentor>

                        </div>
                    </div>


                    <div id={styles.recommendedResources}>
                        <p className={commonStyles.title} style={{ fontSize: "large", marginBottom: "30px" }}>
                            Recommended Resources
                        </p>

                        <div style={{ display: "flex" }}>
                            <ArticleResource link={"/course-content/sample-blog-post"} title={"How to Cultivate Self-Awareness"} description={"Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness."}>
                            </ArticleResource>

                            <ArticleResource link={"/course-content/sample-blog-post"} title={"Finding Direction in Life"} description={"Finding direction in life can feel like an overwhelming task at times with so many options, so many open paths. Learn how to navigate through this obstacle and find the right path for you."}>
                            </ArticleResource>

                            <ArticleResource link={"/course-content/sample-blog-post"} title={"The Basics of Time Management"} description={"Balancing school, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to time management and avoid feeling overwhelmed."}>
                            </ArticleResource>
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
