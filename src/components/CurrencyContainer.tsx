import type { FC } from "react";
import { useState } from "react";
import { convertCurrency, CurrencyList, getCurrencyFromUrl } from "../service/CurrencyService";

interface Props {
  currencyList: CurrencyList;
}

export const CurrencyContainer: FC<Props> = ({ currencyList }: Props) => {
  const [convertedCurrency, setConvertedCurrency] = useState(convertCurrency(currencyList, getCurrencyFromUrl()));


  return convertedCurrency;
};