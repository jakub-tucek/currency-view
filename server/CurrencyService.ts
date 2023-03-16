import type { CurrencyList } from "../src/service/CurrencyService";

export function parseCurrencyResponse(response: string): CurrencyList {
  return response.split("\n").slice(2).map(responseLine => {
    const responseLineSplitBySegments = responseLine.split("|");
    if (responseLineSplitBySegments.length !== 5) {
      console.warn("Invalid data in response", responseLine);
      return null;
    }
    const [country, currency, amount, code, rate] = responseLineSplitBySegments;

    return {
      country,
      currency,
      amount: Number(amount),
      code,
      rate: Number(rate)
    };
  }).filter(i => !!i) as CurrencyList;

}