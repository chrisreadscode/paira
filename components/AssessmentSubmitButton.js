import Link from "next/link";
import styles from "../styles/Default.module.css";

export default function AssessmentSubmitButton() {
  return (
    <div
      key="submit"
      style={{ display: "flex", justifyContent: "center", padding: "5vh 0" }}
    >
      <Link href="/student/choose-your-mentor">
        <button id={styles.button} key="submit">
          Submit
        </button>
      </Link>
    </div>
  );
}
