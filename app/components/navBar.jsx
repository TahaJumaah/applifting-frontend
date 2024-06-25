import styles from "./navBar.module.css";
import Link from "next/link";
export default function NavBar({ changeView }) {
  return (
    <div className={styles.navBar}>
      <p className={styles.navItem}>
        <Link href={"/gallery"}>Gallery</Link>
      </p>
      <div id={styles.logoContainer}>
        <p id={styles.logo}>
          {" "}
          <Link href={"/"}>DevOps</Link>
        </p>
      </div>
      <p className={styles.navItem}>
        <Link href={"/"}>Home</Link>
      </p>
    </div>
  );
}
