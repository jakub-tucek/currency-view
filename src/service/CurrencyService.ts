export type Currency = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

export type CurrencyList = Currency[];

export interface ConversionResult {
  currency: Currency;
  result: number;
}

export function convertCurrency(currencyList: CurrencyList, targetCurrencyCode: string, amount: number): ConversionResult {
  const targetCurrency = currencyList.find(c => c.code.toLowerCase() === targetCurrencyCode.toLowerCase());

  if (!targetCurrency) {
    throw new Error("Unrecognized currency");
  }

  return {
    currency: targetCurrency,
    result: targetCurrency.rate / targetCurrency.amount * amount
  };
}

