//e.g server.js
import express from "express";
import https from "https";
import ViteExpress from "vite-express";
import { parseCurrencyResponse } from "./CurrencyService.js";

const app = express();

const allowCrossDomain = (req: any, res: any, next: any) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};
app.use(allowCrossDomain);

app.get("/currency", (_, res) => {
    https.get("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt", (httpRes) => {
      let data: any = [];
      console.log("Status Code:", httpRes.statusCode);

      httpRes.on("data", chunk => {
        data.push(chunk);
      });

      httpRes.on("end", () => {
        const buffer = Buffer.concat(data).toString();
        console.log("Response ended: buffer");
        const parsedData = parseCurrencyResponse(buffer);

        res.send(JSON.stringify(parsedData, null, 2));
      });
    });
  }
);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));