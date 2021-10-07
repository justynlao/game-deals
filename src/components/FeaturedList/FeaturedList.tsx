/* Component Imports */
import GameCard from "../GameCard/GameCard";

/* Type Imports */
import { DealInfoType } from "../../types/deal-info";

/* Style Imports */
import styles from "./FeaturedList.module.css";

interface FeaturedListProps {
  featuredGames: DealInfoType[];
}

const FeaturedList = ({ featuredGames }: FeaturedListProps) => {
  return (
    <div className={styles.featured_container}>
      {featuredGames.map((game: DealInfoType, index: number) => {
        const {
          title: title,
          salePrice: salePrice,
          savings: savings,
          gameID: gameID,
          steamAppID: steamAppID,
          thumb: thumb,
        }: DealInfoType = game;
        return (
          <GameCard
            key={index}
            title={title}
            salePrice={salePrice}
            savings={savings}
            gameID={gameID}
            steamAppID={steamAppID}
            thumb={thumb}
          />
        );
      })}
    </div>
  );
};

export default FeaturedList;
