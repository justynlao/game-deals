import { Card, CardContent, Typography, CardMedia, Chip } from "@mui/material";

import styles from "../styles/GameCard.module.css";

interface GameCardProps {
  title: string;
  normalPrice: string;
  salePrice: string;
  savings: string;
  thumb: string;
}

const GameCard = ({
  title,
  normalPrice,
  salePrice,
  savings,
  thumb,
}: GameCardProps) => {
  savings = `-${Math.round(+savings).toString()}%`;
  salePrice = "$" + salePrice;
  return (
    <Card sx={{ minWidth: 300 }} className={styles.card}>
      <CardMedia component="img" image={thumb} alt="game banner" />
      <CardContent className={styles.card_content}>
        <Typography variant="h6" className={styles.card_title}>
          {title}
        </Typography>
        {/* <Typography className={styles.card_desc}>
          {normalPrice}
          {salePrice}
          {savings}
        </Typography> */}
        <div className={styles.price_tag}>
          <Chip className={styles.chip_savings} label={savings} />
          <Chip className={styles.chip_price} label={salePrice} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
