import Link from "next/link";
import { SportsEsports } from "@mui/icons-material";

import styles from "../styles/Navbar.module.css";

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
        <Link href="/" passHref>
          <a className={styles.nav_link}>Deals</a>
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
