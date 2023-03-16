import { useQuery } from "@tanstack/react-query";
import { fetchJSON } from "./ApiClient";
import { CurrencyList } from "./CurrencyService";


async function fetchCurrency(): Promise<CurrencyList> {
  return await fetchJSON<CurrencyList>("http://localhost:3000/currency");
}

export const useCurrency = () => {
  const currency = useQuery(["currency"], fetchCurrency);

  return {
    isPending: currency.isLoading || currency.isFetching,
    error: currency.error,
    data: currency.data
  };
};