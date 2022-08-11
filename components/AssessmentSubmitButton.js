import styles from "../styles/Default.module.css";

export default function AssessmentSubmitButton() {
  return (
    <div key="submit" style={{ display: "flex", justifyContent: "center" }}>
      <button id={styles.button} key="submit">
        Next
      </button>
    </div>
  );
}
