import Button from "@mui/material/Button";
import CircularProgressCard from "./CircularProgressCard";
import styles from "../styles/Insights.module.css";
import stylesCommon from "../styles/common.module.css";
import Link from 'next/link';

export default function InsightsTopStrengthsTopAreasOfGrowth() {
  return (
    <div className={`${styles.left45} ${stylesCommon.flexColumn}`}>
      {/* top box for top strengths */}
      <div id={styles.topStrengthsBox}>
        <h2 className={`${stylesCommon.flexRowCenter} ${styles.title}`}>
          Your Top Strengths
        </h2>
        {/* each of top three strengths */}
        <div className={stylesCommon.flexRowSpaceAround}>
          {/* score and label */}
          <CircularProgressCard
            skillName={"Growth Mindset"}
            skillStrength={80}
          />
          <CircularProgressCard skillName={"Empathy"} skillStrength={70} />
          <CircularProgressCard skillName={"Perseverance"} skillStrength={60} />
        </div>
      </div>
      {/* middle box for top areas of growth */}
      <div id={styles.topGrowthAreasBox}>
        {/* each of top three areas of growth */}
        <h2 className={`${stylesCommon.flexRowCenter} ${styles.title}`}>Your Top Areas of Growth</h2>
        <div className={stylesCommon.flexRowSpaceAround}>
          {/* score and label */}
          <CircularProgressCard
            skillName={"Self-Awareness"}
            skillStrength={10}
          />
          <CircularProgressCard skillName={"Direction"} skillStrength={20} />
          <CircularProgressCard
            skillName={"Time Management"}
            skillStrength={40}
          />
        </div>
      </div>
      {/* last box of button to find out more */}
      <div className={`${stylesCommon.flexRowCenter} ${styles.buttonBox}`}>
        <Link href="https://www.16personalities.com/free-personality-test">
        <Button className={styles.button} variant="contained">
          Find Out More
        </Button>
        </Link>
      </div>
    </div>
  );
}
