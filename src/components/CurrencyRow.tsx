import type { FC } from "react";
import { Currency } from "../service/CurrencyService";

interface Props {
  currency: Currency;
}

export const CurrencyRow: FC<Props> = ({ currency }: Props) => {
  return (
    <tr>
      <td data-testid="row-country">{currency.country}</td>
      <td data-testid="row-currency">{currency.currency}</td>
      <td data-testid="row-amount">{currency.amount}</td>
      <td data-testid="row-code">{currency.code}</td>
      <td data-testid="row-rate">{currency.rate}</td>
    </tr>
  );
};