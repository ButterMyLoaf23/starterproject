const quoteList = document.getElementById('quoteList');
const loadBtn = document.getElementById('loadBtn');
const storageKey = "pride-prejudice";

function displayQuotes(quotes) {
  quoteList.innerHTML = ''; // Clear old items
  quotes.forEach(quote => {
    const li = document.createElement('li');
    li.textContent = quote;
    quoteList.appendChild(li);
  });
}

function fetchQuotes() {
  fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
      const prideBook = data.books.find(book => book.title === "Pride and Prejudice");
      if (prideBook && prideBook.quotes) {
        localStorage.setItem(storageKey, JSON.stringify(prideBook.quotes));
        displayQuotes(prideBook.quotes);
        loadBtn.style.display = 'none';
      }
    })
    .catch(error => {
      console.error("Error loading quotes:", error);
    });
}

// Load from local storage if available
const storedQuotes = localStorage.getItem(storageKey);
if (storedQuotes) {
  const quotes = JSON.parse(storedQuotes);
  displayQuotes(quotes);
  loadBtn.style.display = 'none';
}

loadBtn.addEventListener('click', fetchQuotes);