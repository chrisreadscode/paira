
import styles from "../styles/Discover.module.css";
import Link from "next/link";



export default function VisualResources(props) {
    const { link, title, duration } = props
    return (
        <Link href={link}>
            <div className={styles.video}>
                {title}
                <div className={styles.vidPic}>
                </div>
                <p style={{ fontSize: "small" }}>{duration}</p>
            </div>
        </Link>
    )
}