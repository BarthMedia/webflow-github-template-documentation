// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config.js';
import { returnFilteredKeyValueObjectArray } from './helper';

// + Objects +

// State
export const state = {
  data: {},
};

// + Functions +

export const createUrlParameterObject = function () {
  // General values
  const href = window.location.href,
    url = new URL(href),
    urlSearchParams = url.searchParams;

  // Output values
  let webflowDevUrl = '',
    hostingUrl = '',
    title = '';

  // Param loop
  config.URL_SEARCH_PARAM_KEYS.forEach(obj => {
    // Values
    const param = urlSearchParams.get(obj.query);

    // If webflow dev url
    if (obj.type === 'dev_url') {
      webflowDevUrl = param;
    }

    // If hosting url
    if (obj.type === 'host_url') {
      hostingUrl = param;
    }

    // If title
    if (obj.type === 'title') {
      title = param;
    }
  });

  // - Format -

  // Values
  const outputObject = {
    href: webflowDevUrl,
    snippet: `<!-- ${title} -->
<script defer src="${hostingUrl}"></script>`,
  };

  // Update
  state.data.urlSearchParams = outputObject;
};
