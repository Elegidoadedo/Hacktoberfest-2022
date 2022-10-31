import React, { useState, useEffect } from "react";
import quoteList from "./quotes.json";
import { Container, Title, Subtitle, Contributor } from "./App.styles";

function App() {
  const [quote, setQuote] = useState(quoteList[0]);
  console.log(quote);
  setTimeout(() => {}, 5000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quote]);

  return (
    <Container>
      <Title>{quote.quote}</Title>
      <Subtitle>{quote.character}</Subtitle>
      <Subtitle>{quote.film}</Subtitle>
      <Contributor>{quote.contributor}</Contributor>
    </Container>
  );
}

export default App;
