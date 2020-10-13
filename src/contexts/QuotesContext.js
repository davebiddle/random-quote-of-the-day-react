import { createContext } from "react";

const QuotesContext = createContext({
  quotes: [],
  paginationMeta: {},
});

export default QuotesContext;
