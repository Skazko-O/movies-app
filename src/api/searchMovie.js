import useStorage from "../hooks/useStorage";

const { getItem, setItem } = useStorage();

const fallbackImage = `${window.location.origin}/movies-app/assets/images/no-img.png`
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

export async function searchMovie(query, type = 'movie', year = '', language = 'en-US', page = 1) {
  const url = `https://api.themoviedb.org/3/search/${type}`;

  const params = new URLSearchParams({
    query,
    include_adult: 'false',
    page: page.toString(),
    language
  });

  if (year) {
    if (type === 'movie') {
      params.append('year', year);
    } else if (type === 'tv') {
      params.append('first_air_date_year', year)
    }
  }

  const cacheKey = `${query.trim().toLowerCase().replaceAll(' ', '_')}_${type}_${year}_${page}`;

  const cached = getItem(cacheKey);
  if (cached) {
    console.log('Cached data is used', cacheKey);
    return cached;
  }

  try {
    const response = await fetch(`${url}?${params.toString()}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error('Нічого не знайдено');
    }

    let results = data.results;

    if (type === 'multi' && year) {
      results = results.filter(x => {
        const date = x.release_date || x.first_air_date || '';
        return date.startsWith(year);
      });
    }

    //фінальний масив зображень і типів
    const mappedResults = results.map(x => ({
      ...x,
      media_type: type === 'multi' ? x.media_type : type,
      image: x.poster_path ? `${IMAGE_BASE}${x.poster_path}` : fallbackImage
    }));
    // повертаємо об'єкт з усіма мета-данними
    const finalData = {
      total: data.total_results,
      totalPages: data.total_pages,
      currentPage: page,
      results: mappedResults
    };

    setItem(cacheKey, finalData);

    return finalData;

  } catch (err) {
    console.error('Помилка при пошуку фільмів:', err.message)

    return {
      total: 0,
      totalPages: 0,
      currentPage: page,
      results: []
    };
  }
}
