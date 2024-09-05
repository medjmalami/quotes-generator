import React, { useState, useEffect } from "react";

function QuoteDisplay() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  const handleNewQuote = () => {
    fetchQuote();
  };
  // Empty dependency array ensures fetching only on mount

  return (
    <div className="rounded p-3 bg-info-subtle">
      <div className="m-3 fs-3 text-primary text-center" id="text">
        {quote.text}
      </div>
      <div className="float-end m-3 text-primary" id="author">
        -{quote.author}
      </div>
      <a
        className="text-decoration-none text-white btn btn-primary  bottom-0 end-0  m-3 m-t-5"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote.text
        )} - ${quote.author}`}
        target="_blank"
        rel="noreferrer"
        id="tweet-quote"
      >
        tweet
      </a>
      <div
        className="btn btn-primary  bottom-0 end-0 m-3 m-t-5"
        style={{ cursor: "pointer" }}
        onClick={handleNewQuote}
        id="new-quote"
      >
        New Quote
      </div>
    </div>
  );
}

export default QuoteDisplay;
