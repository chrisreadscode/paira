import { CircularProgressWithLabelRotated } from "../lib/circularprogresswheels";
import styles from "../styles/Login.module.css";

export default function InsightsMonthlyImprovements() {
  return (
    <div id={styles.box}>
      <h2>Monthly Improvements</h2>
      {/* 3 improvements */}
      <div style={{ display: "flex" }}>
        {/* An improvement */}
        <div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <CircularProgressWithLabelRotated
                value={6.5}
                variant="determinate"
              />
            </div>
            <div>Increase in self-awareness</div>
          </div>
          <div>
            Your self-awareness has increased by 13%. Your assessment shows that
            you have greater understanding of who you are as a person, your
            strengths and your growth areas. You also have a greater
            understanding of your motivations, beliefs, and emotions. Your
            current score is <span>23</span> so keep on going!
          </div>
        </div>
        {/* An improvement */}
        <div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <CircularProgressWithLabelRotated
                value={17}
                variant="determinate"
              />
            </div>
            <div>Increase in direction</div>
          </div>
          <div>
            Your direction score has increased the most this month by 34%. Your
            assessment indicates that you have greater understanding of not only
            what you want to do in life but also the tools needed to figure out
            your passion. Your current score is <span>54</span>. One step at a
            time!
          </div>
        </div>
        {/* An improvement */}
        <div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <CircularProgressWithLabelRotated
                value={3.5}
                variant="determinate"
              />
            </div>
            <div>Increase in time management</div>
          </div>
          <div>
            Your time management skills have increased by 7%. Your assessment
            illustrates that you have a greater understanding of the importance
            of time management and some of the strategies that are proven to
            work. Your current score is <span>47</span>. Time management is
            hard, so continue the growth!
          </div>
        </div>
      </div>
    </div>
  );
}
