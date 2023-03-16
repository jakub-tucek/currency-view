import type { FC, FormEventHandler } from "react";
import { getCurrencyFromUrl } from "../service/CurrencyService";

interface Props {
  onCurrencyChange: (currency: string) => void;
  currencyList: string[];
}

export const CurrencyForm: FC<Props> = ({ currencyList, onCurrencyChange }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log("aaa", { e });
  };


  return <div>

    <form onSubmit={handleSubmit}>
      <label htmlFor="amount"> Currency: </label>
      <input type="text" name="amount" />

      <label htmlFor="currency"></label>
      <select name="currency">
        {currencyList.map(c => (
          <option id={c} key={c}>c</option>
        ))}
      </select>

      <button type="submit">Convert</button>
    </form>

  </div>;
};