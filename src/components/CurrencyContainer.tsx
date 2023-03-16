import type { FC } from "react";
import React, { useState } from "react";
import { ConversionResult, convertCurrency, CurrencyList } from "../service/CurrencyService";
import { CurrencyTable } from "./CurrencyTable";
import { CurrencyForm, CurrencyFormData } from "./CurrencyForm";
import { ConversionResultView } from "./ConversionResultView";

interface Props {
  currencyList: CurrencyList;
}


export const CurrencyContainer: FC<Props> = ({ currencyList }: Props) => {
  const [convertedCurrency, setConvertedCurrency] = useState<ConversionResult | undefined>();

  function handleCurrencyChange(currencyData: CurrencyFormData) {
    const { currency, result } = convertCurrency(currencyList, currencyData.targetCurrencyCode, currencyData.amount);
    setConvertedCurrency(
      { currency, result }
    );
  }

  return <div>
    <div className="row">
      <div className="col-xl-6">
        <CurrencyTable currencyList={currencyList} />
      </div>
      <div className="col-md-6">
        <CurrencyForm currencies={currencyList} onCurrencyChange={handleCurrencyChange} />
        {convertedCurrency && <ConversionResultView result={convertedCurrency} />}
      </div>
    </div>

  </div>;
};