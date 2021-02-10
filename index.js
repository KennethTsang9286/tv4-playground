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
          },
        },
      },
    },
  },
};

const response = {
  data: {
    createQuote: {
      id: "123123-123123-123123",
      fromCurrency: "USD",
      fromAmount: 79,
      toCurrency: "AUD",
      toAmount: 100,
      rate: 1,
    },
  },
};

const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const Reset = "\x1b[0m"

const validation = tv4.validate(response, schema, true, true);
console.log("validation:", validation? FgGreen: FgRed, `${validation}` , Reset);
console.log(tv4.error);