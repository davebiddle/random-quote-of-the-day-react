/**
 * Helper for toggling Previous Quotes listing item open/close state,
 * on narrow viewports.
 *
 * @param {Object} quotes The array of quote objects currently in state
 * @param {Object} quote  The quote whose listing item is to be toggled
 * @return {Object}
 */
const getUpdatedQuotes = (quotes, quote) => {
  // Create a shallow copy of the `quotes` state prop (using
  // spread), to work with.
  const updatedQuotes = [...quotes];

  // Clone the quote to be updated in our shallow copy of the
  // `quotes` state prop, to avoid working directly on the
  // state object.
  const index = updatedQuotes.indexOf(quote);
  updatedQuotes[index] = { ...quote };

  // Set the `isOpen` prop on our cloned quote to the inverse
  // of it's current value.
  updatedQuotes[index].isOpen = !updatedQuotes[index].isOpen;

  return updatedQuotes;
};

/**
 * Our main Reducer funcion, to be registered with `React.useReducer()`.
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
      const { quotes: newQuotes, paginationMeta } = payload;

      return {
        ...state,
        quotes: newQuotes,
        isLoaded: true,
        paginationMeta: paginationMeta,
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
