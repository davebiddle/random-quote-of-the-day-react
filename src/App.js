import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import PreviousQuotes from "pages/PreviousQuotes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/previous-quotes" component={PreviousQuotes} />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
