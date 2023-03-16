import { convertCurrency } from "./CurrencyService";

describe("CurrencyService", () => {

  it("should convert", () => {
    const result = convertCurrency([
      {
        code: "USD",
        amount: 1,
        country: "usa",
        rate: 22.3,
        currency: "dollar"
      }
    ], "USD", 2.5);

    expect(result).toEqual(55.75);
  });
});