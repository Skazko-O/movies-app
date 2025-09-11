const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGI0NWVkNWZhMDY5NTRhMGFlZWZkMjU4YmI4ODYwYyIsIm5iZiI6MTc1NTk0OTY2Ny4zNDIwMDAyLCJzdWIiOiI2OGE5YWE2M2I1YTFiMThhMTk2NmZjZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Amay3DD7G_Ot0fU-05P3xEE1EqH8MTjnclXRIBFFvUE'
  }
};

export async function searchMovie(query, type = 'movie', year = '', language = 'en-US') {
  const url = `https://api.themoviedb.org/3/search/${type}`;
  const params = new URLSearchParams({
    query: encodeURIComponent(query),
    include_adult: 'false',
    page: '1',
    language
  });

  if (year) params.append('year', year);

  const response = await fetch(`${url}?${params.toString()}`, options);
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Нічого не знайдено');
  }

  return data.results.map(x => ({
    ...x,
    media_type: type === 'multi' ? x.media_type : type,
    image: x.poster_path ? `${IMAGE_BASE}${x.poster_path}` : 'assets/images/no-img.png'
  }));
}
