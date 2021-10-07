/* Component Imports */
import FeaturedList from "../components/FeaturedList/FeaturedList";

/* Library Imports */
import axios from "axios";

/* Type Imports */
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

/* Style Imports */
import styles from "../styles/Home.module.css";

const Home: NextPage = ({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Featured Deals</h1>
      <FeaturedList featuredGames={games} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1,3,7,11"
  );
  const games = res.data;

  return {
    props: {
      games,
    },
  };
};

export default Home;
