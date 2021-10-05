import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import styles from "../styles/GameCard.module.css";

interface GameCardProps {
  title: string;
  salePrice: string;
  savings: string;
  steamAppID: string;
  thumb: string;
}

const GameCard = ({
  title,
  salePrice,
  savings,
  steamAppID,
  thumb,
}: GameCardProps) => {
  savings = `-${Math.round(+savings).toString()}%`;
  salePrice = "$" + salePrice;
  const thumbnail = `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;

  return (
    <Card sx={{ maxWidth: 460}} className={styles.card}>
      <CardMedia
        className={styles.card_media}
        component="img"
        image={steamAppID === null ? thumb : thumbnail}
        alt="Image not found"
      />
      <CardContent className={styles.card_content}>
        <Typography variant="h5" className={styles.card_title}>
          {title}
        </Typography>

        <div className={styles.actions}>
          <Add className={styles.add}/>
          <div className={styles.price_tag}>
            <Chip className={styles.chip_savings} label={savings} />
            <Chip className={styles.chip_price} label={salePrice} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
