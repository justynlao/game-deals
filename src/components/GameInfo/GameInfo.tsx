/* Component Imports */
import Image from "next/image";

/* UI Imports */
import { List, ListItem, ListItemText, Chip } from "@mui/material";

/* Type Imports */
import { CheapestPrice, StoreInfo } from "../../types/game-info";
import { Store } from "../../types/store-info";

/* Style Imports */
import styles from "./GameInfo.module.css";

interface GameInfoProps {
  cheapestPrice: CheapestPrice;
  deals: StoreInfo[];
  storeDetails: Store[];
}

const GamePriceInfo = ({
  cheapestPrice,
  deals,
  storeDetails,
}: GameInfoProps) => {
  const { price, date } = cheapestPrice;

  return (
    <div className={styles.container}>
      <List
        sx={{ width: "100%", maxWidth: 460 }}
        component="nav"
        aria-label="mailbox folders"
      >
        {deals.map((deal, index) => {
          const { storeID, price, retailPrice, savings } = deal;
          return (
            <ListItem key={index} button divider>
              <Image
                src={`https://www.cheapshark.com${storeDetails[+storeID - 1].images.banner}`}
                alt="store banner"
                width="180"
                height="50"
              />
              <ListItemText>
                {storeDetails[+storeID - 1].storeName}
              </ListItemText>
              <Chip label={price} />
              <Chip label={retailPrice} />
              <Chip label={savings} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default GamePriceInfo;
