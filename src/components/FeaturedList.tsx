import { Title } from "@mui/icons-material";
import { useState } from "react";

import GameCard from "./GameCard";

import styles from '../styles/FeaturedList.module.css'

interface Game {
  title: string;
  normalPrice: string;
  salePrice: string;
  savings: string;
  steamAppID: string;
}

interface FeaturedListProps {
  featuredGames: Game[];
}

const FeaturedList = ({ featuredGames }: FeaturedListProps) => {
  return (
    <div className={styles.featured_container}>
      {featuredGames.map((game, index) => {
        const {
          title: title,
          normalPrice: normalPrice,
          salePrice: salePrice,
          savings: savings,
          steamAppID: steamAppID,
        }: Game = game;
        return (
          <GameCard
            key={index}
            title={title}
            normalPrice={normalPrice}
            salePrice={salePrice}
            savings={savings}
            steamAppID={steamAppID}
          />
        );
      })}
    </div>
  );
};

export default FeaturedList;
