import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div id={styles.beforeLoginHeader}>
      <Link href="/">
        <a>
          <Image
            alt="paira logo"
            height="38px"
            width="200px"
            src="/paira-logo.png"
          />
        </a>
      </Link>
    </div>
  );
}
