import Image from "next/image";
import Link from "next/Link";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="/index"
      >
          <Image src="/paira-logo.png" alt="PAIRA Logo" width={100} height={19} />
      </Link>
    </footer>
  );
}