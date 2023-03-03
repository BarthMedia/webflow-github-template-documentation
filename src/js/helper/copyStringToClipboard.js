// + Import +
import {
  CLIPBOARD_TIMEOUT_SEC,
  CLIPBOARD_ARTIFICIAL_DELAY_SEC,
} from '../config';

// + Export +
export default function (
  text = 'Test string.',
  buttonElement = false,
  successHandler = string => {
    /* Do nothing */
  },
  errorHandler = console.log,
  buttonData = {
    initialText: 'Copy Snippet to Clipboard',
    try: 'Copying...',
    success: 'Copied!',
    error: 'Failed...',
  }
) {
  // Fallback copy event listener trigger function
  function fallbackCopyTextToClipboard(text) {
    try {
      document.execCommand('copy');

      successButtonTextChange();
      successHandler('Fallback: Copying text command was successful');
    } catch (err) {
      errorButtonTextChange();
      errorHandler('Fallback: Oops, unable to copy', err);
    }
  }

  // Navigator object clipboard method
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    navigator.clipboard.writeText(text).then(
      function () {
        successButtonTextChange();
        successHandler('Async: Copying to clipboard was successful!');
      },
      function (err) {
        errorButtonTextChange();
        errorHandler('Async: Could not copy text: ', err);
      }
    );
  }

  // Document copy event listener
  document.addEventListener('copy', event => {
    try {
      event.clipboardData.setData('application/json', text);
      event.preventDefault();

      successButtonTextChange();
      successHandler('Clipboard event: Copying text command was successful');
    } catch (err) {
      errorButtonTextChange();
      errorHandler('Clipboard event: Oops, unable to copy', err);
    }
  });

  // - Change button text -

  // Values
  const isButton = buttonElement ? true : false;

  function tryingButtonTextChange() {
    if (!isButton) return;

    buttonElement.innerText = buttonData.try;
  }

  function successButtonTextChange() {
    if (!isButton) return;

    setTimeout(function () {
      buttonElement.innerText = buttonData.success;
      backToInitialButtonState();
    }, CLIPBOARD_ARTIFICIAL_DELAY_SEC + 1000);
  }

  function errorButtonTextChange() {
    if (!isButton) return;

    setTimeout(function () {
      buttonElement.innerText = buttonData.error;
      backToInitialButtonState();
    }, CLIPBOARD_ARTIFICIAL_DELAY_SEC * 1000);
  }

  function backToInitialButtonState() {
    setTimeout(function () {
      buttonElement.innerText = buttonData.initialText;
    }, CLIPBOARD_TIMEOUT_SEC * 1000);
  }

  // Init
  tryingButtonTextChange();
  copyTextToClipboard(text);
}
