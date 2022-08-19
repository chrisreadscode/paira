import styles from "../styles/StudentsTab.module.css";
import Link from "next/link";
import Image from "next/image";



export default function MentorStudent(props) {
    const { link, imgTitle, img, name } = props
    return (
        <Link href={link}>
            <div className={styles.menteeCard}>
                <div className={styles.mentee} style={{ height: "120px" }}>
                    <Image alt={imgTitle}
                        src={img}
                        width="100px"
                        height="100px"
                    ></Image>
                    <p className={styles.subtitle}>{name}</p>
                </div>
                <p className={styles.menteeDescription} style={{ textAlign: "center", lineHeight: "14px", marginTop: "12px" }}> Student</p>
            </div>

        </Link>
    )
}








