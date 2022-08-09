import styles from "../styles/Login.module.css";
import QuizCard from "../components/QuizCard";

export default function InsightsDiscoverMoreInsights() {
  return (
    <div id={styles.box}>
      <h2>Discover more insights</h2>
      <div>Take one of these short tests to uncover more about yourself.</div>
      {/* Quizzes to take section */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
        <div style={{ display: "flex" }}>
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </div>
  );
}
