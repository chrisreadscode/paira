import Image from "next/image";
import Link from "next/link";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Header.module.css";

export default function HeaderStudent() {
  return (
    <div id={styles.logo}>
      <Link href="/student/home">
        <a>
          <Image
            alt="paira logo"
            height="38px"
            width="200px"
            src="/paira-logo.png"
            float="left"
          />
        </a>
      </Link>

      <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
        <Link href="/student/home">
          <div className={styles.icon}>
            <HomeIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Home</div>
          </div>
        </Link>

        <Link href="/student/insights">
          <div className={styles.icon}>
            <AutoGraphIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Insights</div>
          </div>
        </Link>

        <Link href="/student/discover">
          <div className={styles.icon}>
            <SearchIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Discover</div>
          </div>
        </Link>

        <Link href="/student/schedule">
          <div className={styles.icon}>
            <CalendarTodayIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Schedule</div>
          </div>
        </Link>

        <Link href="/student/message">
          <div className={styles.icon}>
            <MessageIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Message</div>
          </div>
        </Link>

        <Link href="/student/saved-resources">
          <div className={styles.icon}>
            <BookmarkIcon className={styles.center} />
            <div className={styles.center} style={{ fontSize: "small" }}>Saved</div>
          </div>
        </Link>

        <Link href="/student/profile">
          <div className={styles.icon} style={{ opacity: "1", position: "relative", bottom: "7px" }}>
            <Image alt="Profile Picture"
              src="/profile-pic.png"
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
