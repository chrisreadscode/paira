

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Profile.module.css";


export default function MentorCardSchedule(props) {
    const { name, description} = props
    return (
        <Link href="/student/message" >
            <div className={styles.mentorBox} style={{ marginLeft: "20px" }}>
                <div className={styles.mentorImg}>
                </div>
                Gina Wee
                <p className={styles.mentorDescription}>Personal Mentor</p>
            </div>
        </Link>
    );

}
