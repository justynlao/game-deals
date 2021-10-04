import Link from "next/link";
import { SportsEsports } from "@mui/icons-material";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <div className={styles.nav_logo}>
          <SportsEsports color="inherit" fontSize="large" />
          <div className={styles.nav_logo_label}>Dyno Deals</div>
        </div>
      </Link>
      <div className={styles.nav_links}>
        <Link href="/" passHref>
          <div className={styles.nav_link}>Deals</div>
        </Link>
        <Link href="/" passHref>
          <div className={styles.nav_link}>Favorites</div>
        </Link>
        <Link href="/" passHref>
          <div className={styles.nav_link}>Login</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
