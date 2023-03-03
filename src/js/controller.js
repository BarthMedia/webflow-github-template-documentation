// + Imports +

// Base
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Custom
import view from './views/view.js';
import * as model from './model.js';

// + Functions +

(() => {
  // Control test
  const control = async function () {
    try {
      // Get URL parameter data from model
      model.createUrlParameterObject();

      // Deconstruct state
      const { urlSearchParams } = model.state.data;

      // Initialize buttons
      view.initDevUrlButton(urlSearchParams.href);
      view.initClipboardButton(urlSearchParams.snippet);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  // + Initialize +
  const init = function () {
    view.addHandler(control);
  };
  init();
})();
