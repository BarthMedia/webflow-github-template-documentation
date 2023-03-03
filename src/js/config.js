/**
 * Config files are fire <3.
 * Way cleaner implementation of my original
 * single file architecture
 */

// Selectors
export const DEV_URL_BUTTON_SELECTOR = '[bmg-element="Dev URL Button"]';
export const CLIPBOARD_BUTTON_SELECTOR = '[bmg-element="Clipboard Button"]';

// URLs
export const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Param key type

// Param object
export const URL_SEARCH_PARAM_KEYS = [
  { query: 'w_io', name: 'Webflow.io development url', type: 'dev_url' },
  { query: 'h_url', name: 'Local hosting url', type: 'host_url' },
  { query: 'd_title', name: 'Document title', type: 'title' },
];

// Other
export const TIMEOUT_SEC = 10;
export const CLIPBOARD_TIMEOUT_SEC = 1.65 + 0;
export const CLIPBOARD_ARTIFICIAL_DELAY_SEC = 0.35;
