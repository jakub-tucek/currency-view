export type Currency = {
  country: string;
  currency: string;
  amount: string;
  code: string;
  rate: number;
}

export type CurrencyList = Currency[];


const CURRENCY_QUERY_PARAM = "currency";

export function getCurrencyFromUrl(): string {
  return new URLSearchParams(window.location.href).get(CURRENCY_QUERY_PARAM) || "";
}

export function setCurrencyToUrl(currency: string) {

}


export function convertCurrency(currencyList: CurrencyList, currency: string) {
  currencyList.find(c => c.country.toLowerCase() === currency.toLowerCase())
}


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
      amount,
      code,
      rate: Number(rate)
    };
  }).filter(i => !!i) as CurrencyList;

}