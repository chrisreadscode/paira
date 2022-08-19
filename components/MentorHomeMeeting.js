import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";



export default function MentorHomeMeeting(props) {
    const { name, imgTitle, img, date, time } = props
    return (
        <div className={styles.menteeBox}>
            <div>
                <p className={styles.menteeName}>{name}</p>
                <div className={styles.menteePic}>
                    <Image alt={imgTitle}
                        src={img}
                        width="50px"
                        height="50px"
                    ></Image>
                </div>
            </div>

            <div className={styles.meetingDescription}>
                <p style={{ margin: "0px", marginBottom: "10px" }}>Date: {date}</p>
                <p style={{ margin: "0px" }}>Time: {time}</p>
            </div>

            <hr></hr>

            <div>
                <Link href="/mentor/schedule">
                    <div className={styles.buttons} style={{ float: "left" }}>
                        Join Meeting
                    </div>
                </Link>
                <Link href="/mentor/message">
                    <div className={styles.buttons} style={{ float: "right" }}>
                        Message
                    </div>
                </Link>
            </div>
        </div>
    )
}








