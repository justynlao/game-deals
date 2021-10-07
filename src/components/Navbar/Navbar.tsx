/* Component Imports */
import Link from "next/link";

/* UI Imports */
import { SportsEsports } from "@mui/icons-material";

/* Style Imports */
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <div className={styles.nav_logo}>
          <SportsEsports color="inherit" fontSize="large" />
          <a className={styles.nav_logo_label}>Dyno Deals</a>
        </div>
      </Link>
      <div className={styles.nav_links}>
        <Link href="/games" passHref>
          <a className={styles.nav_link}>Games</a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.nav_link}>Favorites</a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.nav_link}>Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
