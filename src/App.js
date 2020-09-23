import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import PreviousQuotes from "pages/PreviousQuotes";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/previous-quotes" component={PreviousQuotes} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
