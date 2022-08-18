
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AccessTimeIcon from '@mui/icons-material/AccessTime';



export default function Assignment(props) {
    const { img, imgTitle, title, type, duration, details, showIcons = true } = props
    return (
        <div className={styles.assignments} style={{ marginLeft: "20px", height: "300px" }}>
            <div className={styles.imgContainer}>
                <div id={styles.img1}>
                    <Image alt={imgTitle}
                        src={img}
                        width="396px"
                        height="300px"
                    ></Image>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.assignmentTitle}>
                    {title}
                    <div style={{ height: "22px" }}>
                        {showIcons ? <><AccessTimeIcon className={styles.icon} style={{ display: "inlineBlock" }} />
                            <p className={styles.assignmentDescription}>{type} · {duration}</p></> : <></>}
                    </div>
                </div>
                <p className={styles.assignmentDetails}>{details} </p>
            </div>
        </div>
    )
}