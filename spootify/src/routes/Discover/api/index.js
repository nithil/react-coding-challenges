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

export const fetchNewReleases = async () => {
  const token = await fetchAccessToken();

  const newReleasesApiResponse = await makeApi({
    url: `${apiConfig.api.baseUrl}/browse/new-releases`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return newReleasesApiResponse.albums.items;
};

export const fetchFeaturedPlayLists = async () => {
  const token = await fetchAccessToken();

  const featuredPlaylistsApiResponse = await makeApi({
    url: `${apiConfig.api.baseUrl}/browse/featured-playlists`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return featuredPlaylistsApiResponse.playlists.items;
};

export const fetchCategories = async () => {
  const token = await fetchAccessToken();

  const categoriesApiResponse = await makeApi({
    url: `${apiConfig.api.baseUrl}/browse/categories`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return categoriesApiResponse.categories.items;
};
