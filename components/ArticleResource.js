
import styles from "../styles/Discover.module.css";
import Image from "next/image";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from "next/link";
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function ArticleResource(props) {
    const { link, title, description} = props
    return (
        <Link href={link}>
            <div className={styles.assignments} style={{ height: "300px" }}>
                <div className={styles.imgContainer}></div>
                <div className={styles.content}>
                    <p style={{ margin: "0px" }}>{title}</p>
                    <div className={styles.articleSubtitle}>
                        <MenuBookIcon className={styles.articleIcon} />
                        <p style={{ margin: "0px", paddingTop: "3px" }}>Article</p>
                    </div>

                    <p style={{ opacity: "0.6", fontSize: "small" }}>{description}</p>
                </div>
            </div>
        </Link>
    )
}