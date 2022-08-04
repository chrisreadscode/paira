import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div style={{ backgroundColor: "white", width: "95%", margin: "10px 0px 10px 10px" }}>
      <Link href="/">
        <Image
          alt="paira logo"
          height="38px"
          width="200px"
          src="/paira-logo.png"
        />
      </Link>
    </div>
  );
}
