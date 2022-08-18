
import styles from "../styles/Discover.module.css";
import Image from "next/image";
import Link from 'next/link';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';




export default function SavedResources(props) {
    const { title, description} = props
    return (
        <Link href="/course-content/sample-blog-post">
            <div className={styles.assignments} style={{ height: "300px" }}>
                <div className={styles.imgContainer}></div>
                <div className={styles.content} style={{ position: "relative" }}>
                    <BookmarkIcon fontSize="large" style={{ position: "absolute", right: "0", top: "-20vh" }} />
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