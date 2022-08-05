import Link from "next/Link";

export default function MentorCardNameOnly() {
  return (
    <Link href="/student/mentor-profile">
      <div>
        Profile picture
        <div>Tina Richards</div>
      </div>
    </Link>
  );
}
