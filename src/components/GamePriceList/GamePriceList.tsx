/* Component Imports */
import Image from "next/image";

/* UI Imports */
import { Chip } from "@mui/material";

/* Type Imports */
import { StoreInfo } from "../../types/game-info";
import { Store } from "../../types/store-info";

/* Style Imports */
import styles from "./GamePriceList.module.css";

interface GameInfoProps {
  deals: StoreInfo[];
  storeDetails: Store[];
}

const GamePriceInfo = ({ deals, storeDetails }: GameInfoProps) => {
  return (
    <ul className={styles.list_container}>
      {deals.map((deal, index) => {
        let { storeID, dealID, price, savings } = deal;
        price = "$" + price;
        savings = `-${Math.round(+savings).toString()}%`;
        const redirect_url = `https://www.cheapshark.com/redirect?dealID=${dealID}`;

        return (
          <a
            href={redirect_url}
            rel="noreferrer"
            target="_blank"
            className={styles.list_item}
            key={index}
          >
            <span>
              <Image
                src={`https://www.cheapshark.com${storeDetails[+storeID - 1].images.logo}`}
                alt="store banner"
                width="50"
                height="50"
              />
            </span>
            <span className={styles.store_name}>{storeDetails[+storeID - 1].storeName}</span>
            <span className={styles.chip_prices}>
              <Chip className={styles.chip_savings} label={savings} />
              <Chip className={styles.chip_sale} label={price} />
            </span>
          </a>
        );
      })}
    </ul>
  );
};

export default GamePriceInfo;
