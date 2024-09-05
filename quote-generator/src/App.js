import React from "react";
import QuoteDisplay from "./components/QuoteDisplay";
function App() {
  return (
    <div
      className="rounded bg-transparent container d-flex flex-column justify-content-center align-items-center min-vh-100 h-500"
      id="quote-box"
    >
      <QuoteDisplay />
    </div>
  );
}

export default App;
