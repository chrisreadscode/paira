import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import EngineeringIcon from "@mui/icons-material/Engineering";
import styles from "../styles/Insights.module.css";
import stylesCommon from "../styles/common.module.css";
import Link from 'next/link';

export default function InsightsPersonalityType() {
  return (
    <div className={`${styles.right45} ${stylesCommon.flexColumn}`}>
      {/* top box of what type you are */}
      <div className={stylesCommon.flexRow}>
        {/* left side text portion */}
        <div className={`${styles.left45} ${stylesCommon.flexColumn}`} style={{margin: "0"}}>
          <h2 className={`${stylesCommon.flexRowCenter} ${styles.title}`} >You Are An:</h2>
          <h2 className={`${stylesCommon.flexRowCenter} ${styles.title}`} style={{color: "#73C2FB"}}>Analyst</h2>
        </div>
        {/* right side icon */}
        <EngineeringIcon className={styles.right45} style={{alignItems: "center", color: "#73C2FB", display: "flex", justifyContent: "center", height: "15vh", width: "15vw"}}/>
      </div>
      <Divider color="#73C2FB" thickness={3} variant="outlined"/>
      {/* Strength portion */}
      <div style={{textAlign: "justify", padding: "3vh 0"}}>
        <span className={styles.bold}>Strength:</span> As an analyst, you like
        to think and observe before making a decision. You excel in strategic
        planning by making good inferences.
      </div>
      {/* Weakness portion */}
      <div style={{textAlign: "justify", padding: "3vh 0"}}>
        <span className={styles.bold}>Weakness:</span> You may find it hard to
        cop with back to back projects and struggle with stress from time
        management.
      </div>
      {/* last box of button to view full report */}
      <div className={`${stylesCommon.flexRowCenter} ${styles.buttonBox}`} style={{paddingTop: "0vh"}}>
      <Link href="https://www.16personalities.com/free-personality-test">
        <Button className={styles.button} variant="contained">
          View Full Report
        </Button>
        </Link>
      </div>
    </div>
  );
}
