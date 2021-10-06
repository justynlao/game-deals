import axios from "axios";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import { DealInfo } from "../../types/deal-info";

import styles from "../../styles/GameDetails.module.css";

const GameDetails: NextPage = ({
  gameInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1> Loading...</h1>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{gameInfo.info.title}</h1>
      <p>{gameInfo.info.title}</p>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await axios.get(
    `https://www.cheapshark.com/api/1.0/games?id=${id}`
  );
  const gameInfo = res.data;

  return {
    props: {
      gameInfo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1,3,7,11"
  );
  const deals: DealInfo[] = res.data;

  const paths = deals.map((deal: DealInfo) => {
    return {
      params: { id: deal.gameID.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default GameDetails;
