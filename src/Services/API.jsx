const BASE_URL = 'https://api.themoviedb.org';
const KEY = '130ddbced0917ef5d6e094c730cee47c';
const QUERY = '&language=en&include_adult=false';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTopMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/all/day?api_key=${KEY}&language=en`,
  );
}

export function fetchMoviesByQuery(movie) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${KEY}${QUERY}&query=${movie}`,
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMovieCredits(movieID) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieID}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieID) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieID}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}
