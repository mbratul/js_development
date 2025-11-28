class CurrencyConvert {
  static async fetchRate() {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    return data.rates.BDT;
  }
  static async USDtoBDT(amount) {
    const rate = await CurrencyConvert.fetchRate();
    const usd = amount * rate;
    return usd;
  }
  static async BDTtoUSD(amount) {
    const rate = await CurrencyConvert.fetchRate();
    const bdt = amount / rate;
    return bdt;
  }
}
const usdAmount = 100;
const bdRate = await CurrencyConvert.USDtoBDT(usdAmount);
console.log(`${usdAmount} USD is equal to ${bdRate} BDT`);

const bdtAmount = 10000;
const usdRate = await CurrencyConvert.BDTtoUSD(bdtAmount);
console.log(`${bdtAmount} BDT is equal to ${usdRate} USD`);
