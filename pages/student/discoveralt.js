
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




export default function StudentProfile() {
    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main}>

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

                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Time Management Coach</p>
                                <HotelIcon style={{ marginTop: "25.398px", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Study Habits Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Nutritions Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                            </div>

                            <div className={styles.mentor}>
                                <p style={{ margin: "0px" }}>Relationships Coach</p>
                                <HotelIcon style={{ marginTop: "30%", marginLeft: "70%", marginBottom: "15px" }} />

                                <hr style={{ margin: "0px" }}></hr>

                                <div className={styles.findMentor}>
                                    Find a Mentor
                                </div>
                            </div>

                        </div>
                    </div>


                    <div id={styles.recommendedResources}>
                        <p className={commonStyles.title} style={{ fontSize: "large", marginBottom: "30px" }}>
                            Recommended Resources
                        </p>

                        <div style={{ display: "flex" }}>
                            <div className={commonStyles.assignments} style={{ height: "300px" }}>
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

                            <div className={commonStyles.assignments} style={{ height: "300px" }}>
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

                            <div className={commonStyles.assignments} style={{ height: "300px" }}>
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
                        </div>


                    </div>




                </main>

                <Footer />
            </div ></>
    );
}