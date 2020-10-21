import { createContext } from "react";

const QuotesContext = createContext({
  quotes: [],
  paginationMeta: {},
  filterQuery: {},
  historyPushEvent: false,
});

export default QuotesContext;
