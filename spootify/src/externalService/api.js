import axios from 'axios';

/**
 * @param {{ url: string, method: string, headers: object?, params: object?, body: (object|object[])? }} param0
 * @returns {object|array}
 */
export const makeApi = async ({ url, method, headers, params, body }) => {
  const { stack: stackTrace } = new Error('Captured stacktrace before axios request');
  try {
    const configOptions = { url, method };
    if (headers) configOptions.headers = headers;
    if (params) configOptions.params = params;
    if (body) configOptions.data = body;

    const response = await axios(configOptions);

    return response.data;
  } catch (error) {
    error.originalStack = error.stack;
    error.stack = `${error.stack}\n${stackTrace}`;

    if (error.response) {
      // The request was made and the server responded with a status code
      error.data = error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      error.message = `unable to reach the server, ${error.message}`;
    } else {
      // Something happened in setting up the request that triggered an error
      error.message = `couldn't process the request, ${error.message}`;
    }
    throw error;
  }
};
