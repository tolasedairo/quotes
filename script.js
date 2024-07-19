const quotes = [
  {
    quote: `postive thinking will let you do everything better than negative thinking will.`,
    writter: `tolase`,
  },
  {
    quote: `postive thinking will let you do everything better than negative thinking will.`,
    writter: `wale`,
  },
  {
    quote: `postive thinking will let you do everything better than negative thinking will.`,
    writter: `sola`,
  },
  {
    quote: `postive thinking will let you do everything better than negative thinking will.`,
    writter: `kolade`,
  },
  {
    quote: `postive thinking will let you do everything better than negative thinking will.`,
    writter: `falo`,
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
