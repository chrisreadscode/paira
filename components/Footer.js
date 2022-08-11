import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/index">
        <a>
          <Image
            src="/paira-logo.png"
            alt="PAIRA Logo"
            width={100}
            height={19}
          />
        </a>
      </Link>
    </footer>
  );
}
