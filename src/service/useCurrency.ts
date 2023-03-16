import { useQuery } from "@tanstack/react-query";
import { fetchJSON } from "./ApiClient";
import { CurrencyList, parseCurrencyResponse } from "./CurrencyService";


async function fetchCurrency(): Promise<CurrencyList> {
  const currencyRaw = await fetchJSON<string>('https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/');

  return parseCurrencyResponse(currencyRaw)
}

export const useCurrency = () => {
 const currency = useQuery(['currency'], fetchCurrency);

 return {
   isPending: currency.isLoading || currency.isFetching,
   error: currency.error,
   data: currency.data
 }
}