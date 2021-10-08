/* Component/Function Imports */
import GamePriceList from "../../components/GamePriceList/GamePriceList";
import AdditionalDetails from "../../components/AdditionalDetails/AdditionalDetails";
import { useRouter } from "next/router";

/* Library Imports */
import axios from "axios";

/* Type Imports */
import { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { GameInfoType } from "../../types/game-info";
import { StoreInfoType } from "../../types/store-info";
import { DealInfoType, IndividualDealType } from "../../types/deal-info";

/* Style Imports */
import styles from "../../styles/GameDetails.module.css";

const GameDetails: NextPage = ({
  gameInfo,
  storeInfo,
  dealInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1> Loading...</h1>;
  }

  const { cheapestPriceEver, deals } = gameInfo;

  return (
    <main className={styles.main}>
      <AdditionalDetails dealInfo={dealInfo} cheapestPrice={cheapestPriceEver} />
      <GamePriceList deals={deals} storeDetails={storeInfo} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
  const gameInfo: GameInfoType = res.data;

  const res2 = await axios.get("https://www.cheapshark.com/api/1.0/stores");
  const storeInfo: StoreInfoType = res2.data;

  const dealID = gameInfo.deals[0].dealID;
  const res3 = await axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`);
  const dealInfo: IndividualDealType = res3.data;

  return {
    props: {
      gameInfo,
      storeInfo,
      dealInfo,
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1");
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
