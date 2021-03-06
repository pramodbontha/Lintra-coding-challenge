import API from "./api";

/**
 * Fetches the movies list and details.
 * @param {string} movieInput
 * @returns movies data
 */
export const FETCH_MOVIES = async (movieInput) => {
  const response = await API(
    `3/search/movie?query=${movieInput}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
  );
  return response.data;
};
