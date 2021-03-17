import axios from 'axios';

/**
 * @param {{ url: string, method: string, headers: object?, params: object?, body: (object|object[])? }} param0
 * @returns {object|array}
 */
export const makeApi = async ({ url, method, headers, params, body }) => {
  const configOptions = { url, method };
  if (headers) configOptions.headers = headers;
  if (params) configOptions.params = params;
  if (body) configOptions.data = body;

  const response = await axios(configOptions);

  return response.data;
};
