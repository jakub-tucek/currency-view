import type { FC } from "react";
import { ConversionResult } from "../service/CurrencyService";

interface Props {
  result: ConversionResult;
}

export const ConversionResultView: FC<Props> = ({ result }: Props) => {
  return <div>
    Result: <b>{result.result}</b> {result.currency.code}
  </div>;
};