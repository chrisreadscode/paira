

import styles from "../styles/Discover.module.css";
import Link from "next/link";


export default function FindMentor(props) {
    const { mentorDescription, icon } = props
    return (
        <div className={styles.mentor}>
            <div style={{width: "100%", height: "45%"}}>
                <p style={{ margin: "0px" }}>{mentorDescription}</p>
            </div>
            <div style={{ width: "100%", height: "55%" }}>
                {icon}
                <hr style={{ margin: "0px" }}></hr>

                <Link href="/student/choose-your-mentor">
                    <div className={styles.findMentor}>
                        Find a Mentor
                    </div>
                </Link>
            </div>
        </div>
    )
}