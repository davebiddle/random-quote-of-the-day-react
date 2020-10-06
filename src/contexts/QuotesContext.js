import { createContext } from "react";

const QuotesContext = createContext({
  quotes: [],
  orderBy: (event) => {},
  getPage: (pageNum) => {},
  toggleOpenState: (quote) => {},
});

export default QuotesContext;
