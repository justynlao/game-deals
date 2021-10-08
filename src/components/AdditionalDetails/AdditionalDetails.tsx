import Image from "next/image";
import { AttachMoney, MoneyOff, ThumbUp, Face, AddCircleOutline } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";

import { CheapestPrice } from "../../types/game-info";
import { IndividualDealType } from "../../types/deal-info";

import styles from "./AdditionalDetails.module.css";

interface AdditionalDetailsProps {
  dealInfo: IndividualDealType;
  cheapestPrice: CheapestPrice;
}

const AdditionalDetails = ({ dealInfo, cheapestPrice }: AdditionalDetailsProps) => {
  const {
    retailPrice: retailPrice,
    steamAppID: steamAppID,
    steamRatingPercent: steamRatingPercent,
    steamRatingCount: steamRatingCount,
  } = dealInfo.gameInfo;
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
          <Typography variant="h6">Retail: {`$${retailPrice}`}</Typography>
        </Card>
        <Card className={styles.info_card}>
          <MoneyOff className={styles.icon} />
          <Typography variant="h6">Lowest: {`$${price}`}</Typography>
        </Card>
        <Card className={styles.info_card}>
          <ThumbUp className={styles.icon} />
          <Typography variant="h6">
            Rating: {steamRatingPercent === "0" ? "None" : `${steamRatingPercent}%`}
          </Typography>
        </Card>
        <Card className={styles.info_card}>
          <Face className={styles.icon} />
          <Typography variant="h6">
            #Ratings: {steamRatingCount === "0" ? "None" : steamRatingCount}
          </Typography>
        </Card>
      </ul>
    </div>
  );
};

export default AdditionalDetails;
