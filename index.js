var tv4 = require("tv4");

const schema = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        createQuote: {
          type: "object",
          properties: {
            id: { type: "string" },
            fromCurrency: { type: "string" },
            fromAmount: { type: "number" },
            toCurrency: { type: "string" },
            toAmount: { type: "number" },
            rate: { type: "number" },
            inverseRate: { type: "number" },
            fee: {
              type: "object",
              properties: {
                amount: { type: "number" },
                currency: { type: "string" },
              },
            },
            freebies: {
              type: "object",
              properties: {
                total: { type: "number" },
                claimed: { type: "number" },
                remaining: { type: "number" },
              },
            },
          },
        },
      },
    },
  },
};

const response = {
  data: {
    createQuote: {
      id: "c66887c7-594c-4989-81c5-7aa814938465",
      fromCurrency: "USD",
      fromAmount: 79,
      toCurrency: "AUD",
      toAmount: 100,
      rate: 1.2659,
      inverseRate: 0.7899518129394107,
      fee: {
        amount: 5,
        currency: "USD",
      },
      freebies: {
        total: 0,
        claimed: 0,
        remaining: "0",
      },
    },
  },
};

const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const Reset = "\x1b[0m"

const validation = tv4.validate(response, schema, true, true);
console.log("validation:", validation? FgGreen: FgRed, `${validation}` , Reset);
console.log(tv4.error);