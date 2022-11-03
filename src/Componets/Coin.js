import React from "react";

// Style Components
import styles from "./Coin.module.css";

// Getting data from API using axios.map
const Coin = ({ priceChange, name, image, symbol, marketCap, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="coinimage" />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
        // Two digits are taken after the decimal point
      >
        {priceChange.toFixed(2)}
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
