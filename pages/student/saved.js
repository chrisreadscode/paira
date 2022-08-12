import _Head from "../../components/_Head";
import AssignmentCard from "../../components/AssignmentCard";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import styles from "../../styles/Discoveralt.module.css";
import Divider from "@mui/material/Divider";
import commonStyles from "../../styles/common.module.css";
import Link from 'next/link';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import MentorCardNarrow from "../../components/MentorCardNarrow.js";
import QuizIcon from '@mui/icons-material/Quiz';
import { useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Saved() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={commonStyles.container + " " + commonStyles.main} style={{ height: "90vh", padding: "5vh 5vw" }}>
        {/* recommended resources */}
        {/* <div style={{ display: "flex" }}>
          <AssignmentCard />
          <AssignmentCard />
          <Divider orientation="vertical" flexItem />
          <AssignmentCard wide={"wide"}/>
        </div> */}
        <div id={styles.recommendedResources}>
          <p className={commonStyles.title} style={{ fontSize: "large", fontWeight: "bolder", marginBottom: "30px" }}>
            Saved Resources
          </p>

          <div style={{ display: "flex" }}>
            <Link href="/course-content/sample-blog-post">
              <div className={styles.assignments} style={{ height: "300px" }}>
                <div className={styles.imgContainer}></div>
                <div className={styles.content} style={{ position: "relative" }}>
                  <BookmarkIcon fontSize="large" style={{ position: "absolute", right: "0", top: "-20vh" }} />
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
                <div className={styles.content} style={{ position: "relative" }}>
                  <BookmarkIcon fontSize="large" style={{ position: "absolute", right: "0", top: "-20vh" }} />
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
                <div className={styles.content} style={{ position: "relative" }}>
                  <BookmarkIcon fontSize="large" style={{ position: "absolute", right: "0", top: "-20vh" }} />
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
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}