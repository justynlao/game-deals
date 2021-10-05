import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

import FeaturedList from "../components/FeaturedList";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [featuredGames, setFeaturedGames] = useState([]);

  useEffect(() => {
    getFeaturedData();
  }, []);

  const getFeaturedData = async () => {
    const resp = await axios.get(
      "https://www.cheapshark.com/api/1.0/deals?storeID=1,3,7,11"
    );
    setFeaturedGames([...resp.data]);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Find the best deals on PC games!</h1>
      <FeaturedList featuredGames={featuredGames} />
    </main>
  );
};

export default Home;
