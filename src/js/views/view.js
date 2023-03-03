// + Imports +

// Base

// Custom
import * as config from '../config.js';
import copyStringToClipboard from '../helper/copyStringToClipboard.js';

// + Classes +

// Base WebflowView
class WebflowView {
  // ELements
  #devUrlButton = $(config.DEV_URL_BUTTON_SELECTOR);
  #clipboardButton = $(config.CLIPBOARD_BUTTON_SELECTOR);

  // Values

  // - Functions -

  // Dev url button
  initDevUrlButton(href) {
    // Overwrite
    this.#devUrlButton.attr('href', href);
  }

  // Clipboard button
  initClipboardButton(string) {
    // Clear
    this.#clipboardButton.attr('href', '#');

    // Event listener
    this.#clipboardButton.click(function () {
      copyStringToClipboard(string, this);
    });
    // this.#clipboardButton.attr('href', href)
  }

  // Event listeners
  addHandler(handler) {
    ['load'].forEach(event => window.addEventListener(event, handler));
  }
}

// + Exports +

// WebflowView object
export default new WebflowView();
