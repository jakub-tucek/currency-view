import type { FC } from "react";
import { Currency } from "../service/CurrencyService";

interface Props {
  currency: Currency;
}

export const CurrencyRow: FC<Props> = ({ currency }: Props) => {
  return (
    <tr>
      <td>{currency.country}</td>
      <td>{currency.currency}</td>
      <td>{currency.amount}</td>
      <td>{currency.code}</td>
      <td>{currency.rate}</td>
    </tr>
  );
};