/* Component Imports */
import Link from "next/link";

/* UI Imports */
import { Card, CardContent, Typography, CardMedia, Chip } from "@mui/material";
import { Add } from "@mui/icons-material";

/* Style Imports */
import styles from "./GameCard.module.css";

interface GameCardProps {
  title: string;
  salePrice: string;
  savings: string;
  gameID: string;
  steamAppID: string;
  thumb: string;
}

const GameCard = ({ title, salePrice, savings, gameID, steamAppID, thumb }: GameCardProps) => {
  savings = `-${Math.round(+savings).toString()}%`;
  salePrice = "$" + salePrice;
  const thumbnail = `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;

  return (
    <Link href="/game/[id]" as={`/game/${gameID}`} passHref>
      <Card sx={{ maxWidth: 460 }} className={styles.card}>
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
            <Add className={styles.add} />
            <div className={styles.price_tag}>
              <Chip className={styles.chip_savings} label={savings} />
              <Chip className={styles.chip_price} label={salePrice} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
