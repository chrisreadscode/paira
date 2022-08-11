import Link from "next/link";

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
