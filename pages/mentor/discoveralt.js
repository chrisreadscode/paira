
import styles from "../../styles/Discoveralt.module.css";
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




export default function Discoveralt() {
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
                        </div>


                    </div>

                    <div id={styles.vidResources}>
                        <p className={commonStyles.title} style={{ fontSize: "large", marginBottom: "30px" }}>
                            Visual Resources
                        </p>

                        <div id={styles.videos}>
                            <div className={styles.video}>
                                Self-Awareness

                                <div className={styles.vidPic}>
                                </div>
                                <p style={{ fontSize: "small" }}>2 min</p>
                            </div>

                            <div className={styles.video}>
                                Direction

                                <div className={styles.vidPic}>
                                </div>
                                <p style={{ fontSize: "small" }}>3 min</p>
                            </div>

                            <div className={styles.video}>
                                Time Management

                                <div className={styles.vidPic}>
                                </div>
                                <p style={{ fontSize: "small" }}>3 min</p>
                            </div>
                        </div>
                    </div>




                </main>

                </div >
            <Footer />
            </>
    );
}