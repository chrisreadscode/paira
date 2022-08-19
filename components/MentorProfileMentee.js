


import Image from "next/image";
import styles from "../styles/Profile.module.css";
import Link from "next/link";


export default function MentorProfileMentee(props) {
    const { link, imgTitle, img, menteeName } = props
    return (
        <Link href={link}>
            <div className={styles.assigned} style={{ marginLeft: "15px", height: "170px" }}>
                <div style={{ height: "40%" }}>
                    <p className={styles.menteeName}>{menteeName}</p>
                    <div className={styles.menteePic}>
                        <Image alt={imgTitle}
                            src={img}
                            width="40px"
                            height="40px"
                        ></Image>
                    </div>
                </div>
                <div style={{ display: "flex", paddingTop: "10px", height: "60%" }}>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                </div>
            </div>
        </Link>
    );

}
