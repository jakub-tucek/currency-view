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

