import React, { useEffect, useState } from "react";

// API
import { getCoins } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

// Style Components
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // get api from component
  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCoins());
    };
    fetchAPI();
  }, []);

  // get data from input
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // Add search functionality
  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />

      {coins.length ? (
        <div className={styles.coinContainer}>
          <div className={styles.header}>
            <span className={styles.image}></span>
            <span className={styles.name}>Coin</span>
            <span className={styles.symbol}></span>
            <span className={styles.currentPrice}>Price</span>
            <span className={styles.priceChange}>24h</span>
            <span className={styles.marketCap}>Mkt Cap</span>
          </div>
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
