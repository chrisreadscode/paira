

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Schedulealt.module.css";


export default function MentorCardSchedule(props) {
    const { imgTitle, img, mentorName, mentorDescription } = props
    return (
        <div className={styles.mentor}>
            <div className={styles.mentorCard}>
                <Image alt={imgTitle}
                    src={img}
                    width="80px"
                    height="80px"
                ></Image>
                <p style={{ margin: "0px" }}>{mentorName}</p>
                <p className={styles.mentorDescription}> {mentorDescription}</p>
            </div>
        </div>
    );

}
