import { useEffect, useState } from 'react';

import { Quote } from '../utils/types';
import { initialQuote } from '../utils/constants';

const useQuote = () => {
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);

  /**
   * Get a random quote from the API
   */
  const getQuote = async () => {
    try {
      setLoadingQuote(true);
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setCurrentQuote(data);
    } catch (error) {
      setCurrentQuote(initialQuote);
    } finally {
      setLoadingQuote(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  /**
   * Copy text to clipboard
   * @param text
   */
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    /* States */
    loadingQuote,
    currentQuote,

    /* Functions */
    getQuote,
    copyToClipboard
  };
};

export default useQuote;
