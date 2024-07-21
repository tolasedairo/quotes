const quotes = [
  {
    quote: `A dream doesnt become reality through magic, it takes sweat, determination and hard work.`,
    writter: `Collin Powell`,
  },
  {
    quote: `Thinking is the hardest work there is, which is probably the reason so few engage in it.`,
    writter: `Henry Ford`,
  },
  {
    quote: `Happiness is the real sense of fulfilment that comes from hard work.`,
    writter: `Joseph Barbara`,
  },
  {
    quote: `Success is not final; failure is not fatal: it is the courage to continue that counts.`,
    writter: `Fox Tucker`,
  },
  {
    quote: `Success does not come from what you do occasionally, it comes from what you do consistently.`,
    writter: `Marie Forleo`,
  },
];

let quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector("button"),
  writter = document.querySelector(".name");

quoteBtn.addEventListener("click", function () {
  randomQuote = Math.floor(Math.random() * quotes.length);

  quoteText.innerHTML = quotes[randomQuote].quote;
  writter.innerHTML = quotes[randomQuote].writter;
});
