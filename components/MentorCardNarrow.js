import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function MentorCardNarrow(props) {
  const { imgTitle, img, mentorName, mentorDescription } = props
  return (
    <div className={styles.mentor}>
      <div className={styles.mentorCard} style={{ height: "120px" }}>
        <Image alt={imgTitle}
          src={img}
          width="100px"
          height="100px"
        ></Image>
        {mentorName}
      </div>
      <p className={styles.mentorDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> {mentorDescription}</p>

    </div>
  );
}
