import Link from "next/Link";

export default function MentorCardNarrow() {
  return (
    <Link href="/student/mentor-profile">
      <div>
        Profile picture
        <div>Tina Richards</div>
      </div>
    </Link>
  );
}
