import Image from "next/image";
import { AttachMoney, MoneyOff, Star, ThumbUp, Face, AddCircleOutline } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";

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
      <Button className={styles.button} variant="contained">
        <AddCircleOutline sx={{ mr: 2 }} />
        Add to Favorites
      </Button>
      <ul className={styles.detail_list}>
        <Card className={styles.info_card}>
          <AttachMoney className={styles.icon} />
          <Typography variant="h6">Retail: {`$${normalPrice}`}</Typography>
        </Card>
        <Card className={styles.info_card}>
          <MoneyOff className={styles.icon} />
          <Typography variant="h6">Lowest: {`$${price}`}</Typography>
        </Card>
        <Card className={styles.info_card}>
          <ThumbUp className={styles.icon} />
          <Typography variant="h6">Rating: {`${steamRatingPercent}%`}</Typography>
        </Card>
        <Card className={styles.info_card}>
          <Face className={styles.icon} />
          <Typography variant="h6">#Ratings: {steamRatingCount}</Typography>
        </Card>
      </ul>
    </div>
  );
};

export default AdditionalDetails;
