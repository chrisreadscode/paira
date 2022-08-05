import Link from "next/link";

export default function MentorCard() {
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