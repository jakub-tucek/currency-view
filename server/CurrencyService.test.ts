import { parseCurrencyResponse } from "./CurrencyService";

describe("CurrencyService", () => {

  describe("parseCurrencyResponse", () => {
    it("should parse valid response and return currency list", () => {
      const response = `16 Mar 2023 #54
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.069
Brazil|real|1|BRL|4.287
USA|dollar|1|USD|22.660`;

      const result = parseCurrencyResponse(response);


      expect(result).toEqual(
        [
          {
            "amount": "1",
            "code": "AUD",
            "country": "Australia",
            "currency": "dollar",
            "rate": 15.069
          },
          {
            "amount": "1",
            "code": "BRL",
            "country": "Brazil",
            "currency": "real",
            "rate": 4.287
          },
          {
            "amount": "1",
            "code": "USD",
            "country": "USA",
            "currency": "dollar",
            "rate": 22.66
          }
        ]
      );
    });


    it("should leave out invalid data in the response", () => {
      const response = `16 Mar 2023 #54
Country|Currency|Amount|Code|Rate
Australia|dollar|1|15.069
Brazil|real|1|BRL
USA|dollar|1|USD|22.660`;

      const result = parseCurrencyResponse(response);


      expect(result).toEqual(
        [
          {
            "amount": "1",
            "code": "USD",
            "country": "USA",
            "currency": "dollar",
            "rate": 22.66
          }
        ]
      );
    });
  });

});