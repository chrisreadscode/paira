import styles from "../styles/Default.module.css";
import QuizCard from "../components/QuizCard";
import stylesDiscover from "../styles/Discover.module.css";
import commonStyles from "../styles/common.module.css";
import Link from 'next/link'
import HotelIcon from '@mui/icons-material/Hotel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';

export default function InsightsDiscoverMoreInsights() {
  return (
    <div id={styles.box}>
      <h2>Discover more insights</h2>
      <div>Take one of these short tests to uncover more about yourself.</div>
      <br />
      {/* Quizzes to take section */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
                  <div id={stylesDiscover.recommendedResources}>
                        <div style={{ display: "flex" }}>
                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>How to Cultivate Self-Awareness</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>Finding Direction in Life</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Finding direction in life can feel like an overwhelming task at times with so many options, so many open paths. Learn how to navigate through this obstacle and find the right path for you.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>The Basics of Time Management</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Balancing school, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to time management and avoid feeling overwhelmed.</p>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>
          {/* <QuizCard />
          <QuizCard />
          <QuizCard /> */}
        </div>
        <br />
        <div style={{ display: "flex" }}>
                  <div id={stylesDiscover.recommendedResources}>
                        <div style={{ display: "flex" }}>
                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>How to Cultivate Self-Awareness</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Learn about the importance of Self-Awareness and some of its proven benefits. Discover 5 ways to increase your Self-Awareness.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>Finding Direction in Life</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Finding direction in life can feel like an overwhelming task at times with so many options, so many open paths. Learn how to navigate through this obstacle and find the right path for you.</p>
                                </div>
                            </div>
                            </Link>

                            <Link href="/course-content/sample-blog-post">
                              <div className={stylesDiscover.assignments} style={{ height: "300px" }}>
                                  <div className={stylesDiscover.imgContainer}></div>
                                  <div className={stylesDiscover.content}>
                                    <p style={{ margin: "0px" }}>The Basics of Time Management</p>
                                      <div className={stylesDiscover.articleSubtitle}>
                                          <QuizIcon className={stylesDiscover.articleIcon} />
                                        <p style={{ margin: "0px", paddingTop: "3px" }}>Quiz</p>
                                    </div>

                                    <p style={{ opacity: "0.6", fontSize: "small" }}>Balancing school, athletics and a social life can often feel like an inpossible task at times. Find out 7 key components to time management and avoid feeling overwhelmed.</p>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>
          {/* <QuizCard />
          <QuizCard />
          <QuizCard /> */}
        </div>
      </div>
    </div>
  );
}
