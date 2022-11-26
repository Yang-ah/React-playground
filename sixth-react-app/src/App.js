import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputValue, exchange] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resonse) => resonse.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
        console.log(json[0]);
      });
  }, []);

  const inputCng = (e) => {
    exchange(e.target.value);
  };

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? <h3>Loading....</h3> : null}
      <label htmlFor="haveDollar">I have $</label>
      <input id="haveDollar" value={inputValue} onChange={inputCng} />

      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) :{" "}
            {inputValue == false
              ? coin.quotes.USD.price.toFixed(2)
              : ((1 / coin.quotes.USD.price) * inputValue).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
