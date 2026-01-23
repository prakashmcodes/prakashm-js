const quotes = [
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
      { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
      { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
      { text: "What we think, we become.", author: "Buddha" },
      { text: "Happiness depends upon ourselves.", author: "Aristotle" },
      { text: "Action is the foundational key to all success.", author: "Pablo Picasso" }
    ];

    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    const button = document.getElementById("newQuoteBtn");

    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      quoteEl.textContent = `"${randomQuote.text}"`;
      authorEl.classList.remove("hidden");
      authorEl.textContent = `- ${randomQuote.author}`;
    });