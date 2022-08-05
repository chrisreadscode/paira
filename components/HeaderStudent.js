import Image from "next/image";
import Link from "next/link";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import SearchIcon from "@mui/icons-material/Search";

export default function HeaderStudent() {
  return (
    <div style={{ backgroundColor: "white", width: "100%", margin: "10px" }}>
      <Link href="/student/home">
        <Image
          alt="paira logo"
          height="38px"
          width="200px"
          src="/paira-logo.png"
        />
      </Link>
      <div style={{display: "flex"}}>
        <Link href="/student/home">
          <div>
            <HomeIcon />
            <div>Home</div>
          </div>
        </Link>
        <Link href="/student/insights">
          <div>
            <AutoGraphIcon />
            <div>Insights</div>
          </div>
        </Link>
        <Link href="/student/discover">
          <div>
            <SearchIcon />
            <div>Discover</div>
          </div>
        </Link>
        <Link href="/student/schedule">
          <div>
            <CalendarTodayIcon />
            <div>Schedule</div>
          </div>
        </Link>
        <Link href="/student/message">
          <div>
            <MessageIcon />
            <div>Message</div>
          </div>
        </Link>
        <Link href="/student/saved">
          <div>
            <BookmarkIcon />
            <div>Saved</div>
          </div>
        </Link>
        <Link href="/student/profile">Profile Picture</Link>
      </div>
    </div>
  );
}
