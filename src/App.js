import React , { useState } from 'react';
import quoteList from './quotes.json';

function App() {
  const [quote, setQuote] = useState(quoteList[0])

  setTimeout(() => {
    setQuote(quoteList[Math.floor(Math.random()*(quoteList.length))])
  }, 5000);

  return (
 <div>
   <h1>{quote.quote}</h1>
   <h2>{quote.character}</h2>
   <h2>{quote.film}</h2>
   <h4>{quote.contributor}</h4>
 </div>
  );
}

export default App;
