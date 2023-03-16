import type { FC, FormEventHandler } from "react";
import { SubmitButton } from "./SubmitButton";
import { Currency } from "../service/CurrencyService";

interface Props {
  onCurrencyChange: (currency: CurrencyFormData) => void;
  currencies: Currency[];
}

export interface CurrencyFormData {
  amount: number;
  targetCurrencyCode: string;
}

export const CurrencyForm: FC<Props> = ({ currencies, onCurrencyChange }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(data.entries()) as unknown as CurrencyFormData;

    onCurrencyChange(formData);
  };


  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount"> Amount to convert to CZK: </label>
      <input type="number" name="amount" className="form-control" required />

      <label htmlFor="targetCurrencyCode">Target currency:</label>
      <select name="targetCurrencyCode" className="form-control" required>
        {currencies.map((c) => (
          <option id={c.code} key={c.code}>{c.currency} ({c.code})</option>
        ))}
      </select>

      <SubmitButton type="submit" className="btn btn-primary">Convert</SubmitButton>
    </form>

  </div>;
};