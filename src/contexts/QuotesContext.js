import { createContext } from "react";

const QuotesContext = createContext({
  quotes: [],
  paginationMeta: {},
  filterParams: {},
  historyPushEvent: false,
});

export default QuotesContext;
