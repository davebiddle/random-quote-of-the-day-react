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
  const { quotes } = state;
  const { type, payload } = action;

  switch (type) {
    case "quotes/orderBy":
      const { order } = payload;
      console.log(order);
      // Todo : When we fetch PQ's from Backend, we'll need
      // to make a request to fetch them in the specified order.
      return { ...state, quotes: [...quotes].reverse() };
    case "quote/toggleOpenState":
      const { quote } = payload;

      return { ...state, quotes: getUpdatedQuotes(quotes, quote) };
    default:
      return state;
  }
};

export default QuotesReducer;
