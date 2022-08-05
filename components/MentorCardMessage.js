import Link from "next/Link";

export default function MentorCardMessage() {
  return (
    <Link href="/student/mentor-profile">
      <div>
        Profile picture
        <div>Tina Richards</div>
        <div>Time Management Mentor</div>
      </div>
    </Link>
  );
}
