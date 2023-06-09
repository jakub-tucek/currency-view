import type { FC } from "react";
import React from "react";
import { CurrencyList } from "../service/CurrencyService";
import { CurrencyRow } from "./CurrencyRow";

interface Props {
  currencyList: CurrencyList;
}

export const CurrencyTable: FC<Props> = ({ currencyList }: Props) => {
  return <table className="table table-striped" data-testid="currency-table">
    <thead>
    <tr>
      <th>Country</th>
      <th>Currency</th>
      <th>Amount</th>
      <th>Code</th>
      <th>Rate</th>
    </tr>
    </thead>
    <tbody>
    {currencyList.map(currency => <CurrencyRow key={currency.code} currency={currency} />)}
    </tbody>
  </table>;
};