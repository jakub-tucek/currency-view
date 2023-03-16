import React from "react";
import "./App.css";
import { useCurrency } from "./service/useCurrency";
import { CurrencyContainer } from "./components/CurrencyContainer";

function App() {
  const { error, isPending, data } = useCurrency();

  return (
    <div className="App">
      <h1>Currency conversion</h1>
      {isPending && <span className="spinner-grow" />}
      {error && <div className="alert">Sorry something happened :(</div>}
      {data && <CurrencyContainer currencyList={data} />}
    </div>
  );
}

export default App;
