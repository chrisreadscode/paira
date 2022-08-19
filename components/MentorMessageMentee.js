


import Image from "next/image";
import styles from "../styles/Message.module.css";


export default function MentorMessageMentee(props) {
    const { imgTitle, img, menteeName } = props
    return (
        <div className={styles.mentorBox}>
            <Image alt={imgTitle}
                src={img}
                width="55px"
                height="55px"
            ></Image>
            <div style={{ width: "8%", height: "100%" }}></div>
            <div className={styles.mentorDescription}>
                <h3 className={styles.mentorNames}>{menteeName}</h3>
                <p className={styles.mentorNames} style={{ fontSize: "small", color: "#7c7c7c" }}> Student</p>
            </div>
        </div>
    );

}
