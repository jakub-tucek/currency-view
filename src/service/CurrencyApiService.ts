import { CurrencyList } from "./CurrencyService";
import { fetchJSON } from "./ApiClient";


export async function fetchCurrency(): Promise<CurrencyList> {
  return await fetchJSON<CurrencyList>("http://localhost:3000/currency");
}