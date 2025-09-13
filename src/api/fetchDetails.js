const API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';
const baseURL = 'https://api.themoviedb.org/3/';

export async function fetchDetails(tmdbID, type) {
  const response = await fetch(`${baseURL}${type}/${tmdbID}?api_key=${API_KEY_TMDB}`);
  const data = await response.json();
  const title = data.title || data.name || "Unknown title";
  const overview = data.overview || "Опис недоступний";
  const date = data.release_date || data.first_air_date || "Дата невідома";
  return { title, overview, date };
}
