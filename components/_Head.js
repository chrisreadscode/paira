import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function _Head() {
  return (
    <Head>
      <title>PAIRA</title>
      <meta name="description" content="Welcome to PAIRA!" />
      <link rel="icon" href="/favicon.ico" />

      {/* <div className={styles.header}>
        <Image
          alt="paira logo"
          height="50px"
          width="200px"
          src="/paira-placeholder.png"
          z-index="0"
        />
      </div> */}
    </Head>
  );
}
