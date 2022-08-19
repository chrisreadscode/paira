
import styles from "../../styles/Discover.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import Footer from "../../components/Footer.js";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from "next/image";
import Link from "next/link";
import ArticleResource from "../../components/ArticleResource";
import VisualResources from "../../components/VisualResources";


export default function Discover() {
    return (
        <>
            <_Head />
            <HeaderMentor />
            <div className={commonStyles.container}>
                <main className={commonStyles.main}>

                    <div id={styles.search}>
                        <SearchIcon id={styles.searchIcon} />
                        <TextField id="searchText" variant="standard" placeholder="Search Resources" sx={{ width: '40%' }} />
                    </div>


                    <div id={styles.recommendedResources} style={{ marginBottom: "30px" }}>
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

                    <div id={styles.vidResources}>
                        <p className={commonStyles.title} style={{ fontSize: "large", marginBottom: "30px" }}>
                            Visual Resources
                        </p>

                        <div id={styles.videos}>

                            <VisualResources link={"/course-content/sample-video"} title={"Self-Awareness"}
                                duration={"2 min"}></VisualResources>

                            <VisualResources link={"/course-content/sample-video"} title={"Direction"}
                                duration={"3 min"}></VisualResources>

                            <VisualResources link={"/course-content/sample-video"} title={"Time Management"}
                                duration={"5 min"}></VisualResources>
                        </div>
                    </div>




                </main>

            </div >
            <Footer />
        </>
    );
}

// import _Head from "../../components/_Head";
// import DiscoverAssignmentsCard from "../../components/DiscoverAssignmentsCard";
// import Footer from "../../components/Footer";
// import HeaderMentor from "../../components/HeaderMentor";
// import RecommendedResources from "../../components/RecommendedResources";
// import styles from "../../styles/Default.module.css";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";

// export default function Sample() {
//   return (
//     <>
//       <_Head />
//       <HeaderMentor />
//       <main className={styles.container + " " + styles.main}>
//         {/* search bar */}
//         <TextField
//           InputProps={{ startAdornment: <SearchIcon /> }}
//           placeholder="Search Resources"
//         ></TextField>
//         {/* recommended resources */}
//         <div style={{ display: "flex" }}>
//           {RecommendedResources()}
//           <ArrowForwardIosIcon />
//         </div>
//         <div>
//           <h3>Different Assignments</h3>
//           <div style={{ display: "flex" }}>
//             <div style={{ display: "flex" }}>
//               {DiscoverAssignmentsCard({time: "2 min", title: "Self-Awareness"})}
//               {DiscoverAssignmentsCard({time: "3 min", title: "Direction"})}
//               {DiscoverAssignmentsCard({time: "3 min", title: "Time Management"})}
//             </div>
//             <ArrowForwardIosIcon />
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

{
    /* <div id={styles.box}> */
}
