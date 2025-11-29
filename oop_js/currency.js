class CurrencyConvert {
  static async fetchRate() {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      if (!response.ok) {
        throw new Error(`response problem occur ${response.status}`);
      }
      const data = await response.json();
      return data.rates.BDT;
    } catch (error) {
      console.log(error);
    }
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

const a = [1, 2, 3, 4, 5, 6, 4, 5, 6, 5];
const b = a.map((x) => x * x);
console.log(b);
const c = a.filter((x) => x % 2 === 0);
console.log(c);
const r = a.reduce((ac, x) => ac + x, 0);
console.log(r);
