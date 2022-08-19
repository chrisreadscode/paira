import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuBookIcon from '@mui/icons-material/MenuBook';



export default function MentorHomeResources(props) {
    const { link, title, description } = props
    return (
        <Link href={link}>
            <div className={styles.resources}>
                <div className={styles.imgContainer} style={{ height: "40%" }}>
                </div>

                <div className={styles.content} style={{ height: "60%" }}>
                    <div className={styles.assignmentTitle}>
                        {title}

                        <div style={{ height: "22px" }}>
                            <MenuBookIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                            <p className={styles.assignmentDescription}>Article</p>
                        </div>
                    </div>
                    <p className={styles.assignmentDetails} style={{ paddingTop: "10px" }}>{description}</p>
                </div>
            </div>
        </Link>
    )
}








