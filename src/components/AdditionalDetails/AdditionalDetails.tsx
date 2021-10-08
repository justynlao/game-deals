import Image from "next/image";

import { CheapestPrice } from "../../types/game-info";
import { DealInfoType } from "../../types/deal-info";

import styles from "./AdditionalDetails.module.css";

interface AdditionalDetailsProps {
  dealInfo: DealInfoType[];
  cheapestPrice: CheapestPrice;
}

const AdditionalDetails = ({ dealInfo, cheapestPrice }: AdditionalDetailsProps) => {
  const {
    normalPrice: normalPrice,
    steamAppID: steamAppID,
    metacriticScore: metacriticScore,
    steamRatingText: steamRatingText,
    steamRatingPercent: steamRatingPercent,
    steamRatingCount: steamRatingCount,
  } = dealInfo[0];
  const { price } = cheapestPrice;
  const img_url = `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;

  return (
    <div className={styles.details}>
      <Image className={styles.banner} src={img_url} alt="game banner" width="460" height="215" />
      <h1 className={styles.header}>Details</h1>
      <ul className={styles.detail_list}>
        <li>Retail Price: {normalPrice}</li>
        <li>Lowest Price: {price}</li>
        <li>Metacritic: {metacriticScore}</li>
        <li>
          {steamRatingText} {steamRatingPercent} {steamRatingCount}
        </li>
      </ul>
    </div>
  );
};

export default AdditionalDetails;
