import Image from "next/image";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Header.module.css";
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
    return (
        <div id={styles.logo} style={{ width: "98%" }}>
            <Link href="/">
                <Image
                    alt="paira logo"
                    height="38px"
                    width="200px"
                    src="/paira-logo.png"
                    float="left"
                />
            </Link>

            <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
                <Link href="/mentor/home">
                    <div className={styles.icon}>
                        <HomeIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Home</div>
                    </div>
                </Link>

                <Link href="/mentor/students">
                    <div className={styles.icon}>
                        <PersonIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Students</div>
                    </div>
                </Link>

                <Link href="/mentor/discover">
                    <div className={styles.icon}>
                        <SearchIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Discover</div>
                    </div>
                </Link>

                <Link href="/mentor/schedule">
                    <div className={styles.icon}>
                        <CalendarTodayIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Schedule</div>
                    </div>
                </Link>

                <Link href="/mentor/message">
                    <div className={styles.icon}>
                        <MessageIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Message</div>
                    </div>
                </Link>

                <Link href="/mentor/saved">
                    <div className={styles.icon}>
                        <BookmarkIcon className={styles.center} />
                        <div className={styles.center} style={{ fontSize: "small" }}>Saved</div>
                    </div>
                </Link>

                <Link href="/mentor/profile">
                    <div className={styles.icon} style={{ opacity: "1", position: "relative", bottom: "7px" }}>
                        <Image alt="Profile Picture"
                            src="/mentor-profile-pic.png"
                            width="55px"
                            height="55px"
                            className={styles.center}
                        ></Image>
                    </div>
                </Link>
            </div>

        </div>
    );
}
