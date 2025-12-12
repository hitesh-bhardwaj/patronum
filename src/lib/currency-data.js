// src/lib/currency-data.js

// Base = USD
export const CURRENCY_RATES = {
  USD: 1,      // US Dollar
  GBP: 0.79,   // British Pound
  EUR: 0.93,   // Euro
  AUD: 1.52,   // Australian Dollar
};

export function convertCurrency(amountUSD, currency) {
  const rate = CURRENCY_RATES[currency] ?? 1;
  return amountUSD * rate;
}
