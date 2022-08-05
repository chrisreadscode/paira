import Link from "next/link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";

export default function MentorCardExpanded() {
  return (
    <Link href="/student/mentor-profile">
      <div style={{ display: "flex" }}>
        <div>
          Profile picture
          <div>Gina Wee</div>
          <div>Personal Mentor</div>
        </div>
        <Divider orientation="vertical"></Divider>
        <div>
          <div>
            Harvard graduate studying education and adolescent psychology
          </div>
          <CalendarTodayIcon /> <span>No sessions</span>
          <div style={{ display: "flex" }}>
            <Link href="/student/schedule">Schedule now</Link>
            <Link href="/student/message">Send a Message</Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
