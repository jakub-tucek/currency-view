import React from "react";
import { useCurrency } from "./service/useCurrency";
import { CurrencyContainer } from "./components/CurrencyContainer";
import styled from "styled-components";


const FulLWidthDiv = styled.div`
  width: 100%;
  padding: 10px 20px;
`;


function App() {
  const { error, isPending, data } = useCurrency();

  return (
    <FulLWidthDiv>
      <h1>Currency conversion</h1>
      {isPending && <span className="spinner-grow" />}
      {error && <div className="alert">Sorry something happened :(</div>}
      {data && <CurrencyContainer currencyList={data} />}
    </FulLWidthDiv>
  );
}

export default App;
