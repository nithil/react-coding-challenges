import qs from 'querystring';

import { makeApi } from '../../../externalService/api';

import apiConfig from '../../../config';

const fetchAccessToken = async () => {
  const authorizationApiResponse = await makeApi({
    url: apiConfig.api.authUrl,
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({
      grant_type: 'client_credentials',
      client_id: apiConfig.api.clientId,
      client_secret: apiConfig.api.clientSecret,
    }),
  });

  return authorizationApiResponse.access_token;
};
