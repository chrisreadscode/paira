import Link from "next/Link";

export default function MessageCard() {
  return (
    <Link href="/student/mentor-profile">
      <div>
        Profile picture
        <div>Tina Richards</div>
        {/* Or Student */}
        <div>Time Management Mentor</div> 
      </div>
    </Link>
  );
}
