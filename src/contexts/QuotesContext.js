import { createContext } from "react";

const QuotesContext = createContext({
  quotes: [],
  paginationMeta: {},
  filterQuery: {},
});

export default QuotesContext;
