import BookmarkIcon from "@mui/icons-material/Bookmark";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function MentorCard() {
  return (
    <div className="meeting-card">
      Profile picture
      <div>Tina Richards</div>
      <div>Date: July 12th</div>
      <div>Time: 2:30pm</div>
      <Divider />
      <div style={{ display: "flex" }}>
        <Button href="/student/schedule">Zoom Link</Button>
        <Button href="/student/message">Message</Button>
      </div>
    </div>
  );
}
