import Image from "next/image";
import styles from "../styles/Message.module.css";

export default function MessageMentor(props) {
    const { imgTitle, img, mentorName, mentorDescription } = props
    return (
        <div className={styles.mentorBox}>
            {/* <ToggleButton style={{border: "0", padding: "0", margin: "0"}}> */}
            <Image alt={imgTitle}
                src={img}
                width="55px"
                height="55px"
            ></Image>
            <div style={{ width: "8%", height: "100%" }}></div>
            <div className={styles.mentorDescription}>
                <h3 className={styles.mentorNames}>{mentorName}</h3>
                <p className={styles.mentorNames} style={{ fontSize: "small", color: "#7c7c7c" }}>{mentorDescription}</p>
            </div>
            {/* </ToggleButton> */}
        </div>
    )
}