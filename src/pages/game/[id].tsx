/* Component/Function Imports */
import GamePriceInfo from "../../components/GameInfo/GameInfo";
import Image from "next/image";
import { useRouter } from "next/router";

/* Library Imports */
import axios from "axios";

/* Type Imports */
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { DealInfoType } from "../../types/deal-info";

/* Style Imports */
import styles from "../../styles/GameDetails.module.css";

const GameDetails: NextPage = ({
  gameInfo,
  storeInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1> Loading...</h1>;
  }

  const { info, cheapestPriceEver, deals } = gameInfo;
  const img_url = `https://cdn.cloudflare.steamstatic.com/steam/apps/${info.steamAppID}/header.jpg`;

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{gameInfo.info.title}</h1>
      <Image src={img_url} alt="game banner" width="460" height="215" />
      <GamePriceInfo cheapestPrice={cheapestPriceEver} deals={deals} storeDetails={storeInfo} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await axios.get(
    `https://www.cheapshark.com/api/1.0/games?id=${id}`
  );
  const gameInfo = res.data;

  const res2 = await axios.get("https://www.cheapshark.com/api/1.0/stores");
  const storeInfo = res2.data;

  return {
    props: {
      gameInfo,
      storeInfo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1,3,7,11"
  );
  const deals: DealInfoType[] = res.data;

  const paths = deals.map((deal: DealInfoType) => {
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
