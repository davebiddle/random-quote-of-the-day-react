/**
 * Helper for toggling Previous Quotes listing item open/close state,
 * on narrow viewports.
 *
 * @param {Object} quotes The array of quote objects currently in state
 * @param {Object} quote  The quote whose listing item is to be toggled
 * @return {Object}
 */
const getUpdatedQuotes = (quotes, quote) =>
  quotes.map((q) => (quote.id === q.id ? { ...q, isOpen: !q.isOpen } : q));

/**
 * Our main Reducer function, for managing Previous Quotes state.
 *
 * @param {Object} state
 * @param {Object} action
 */
const QuotesReducer = (state, action) => {
  const { type, payload = {} } = action;
  const { quotes } = state;

  switch (type) {
    case "history/handleForward":
      return payload.oldState;
    case "history/handleBack":
      return payload.oldState;
    case "ajax/setLoading":
      return { ...state, isLoaded: false };
    case "ajax/setQuotesData":
      const {
        quotes: newQuotes,
        paginationMeta,
        filterQuery,
        queryString,
      } = payload;

      return {
        ...state,
        quotes: newQuotes,
        isLoaded: true,
        paginationMeta: paginationMeta,
        filterQuery,
        queryString,
      };
    case "ajax/setError":
      const { ajaxError } = payload;

      return { ...state, ajaxError: ajaxError, isLoaded: true };
    case "quote/toggleOpenState":
      const { quote } = payload;

      return { ...state, quotes: getUpdatedQuotes(quotes, quote) };
    default:
      return state;
  }
};

export default QuotesReducer;
