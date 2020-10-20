import { useState } from "react";

function usePreviousQuotesHistoryState() {
  const [locationKeys, setLocationKeys] = useState([]);

  return [locationKeys, setLocationKeys];
}

export default usePreviousQuotesHistoryState;
