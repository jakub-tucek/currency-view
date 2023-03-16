import { useQuery } from "@tanstack/react-query";
import { fetchCurrency } from "./CurrencyApiService";


export const useCurrency = () => {
  const currency = useQuery(["currency"], fetchCurrency);

  return {
    isPending: currency.isLoading || currency.isFetching,
    error: currency.error,
    data: currency.data
  };
};