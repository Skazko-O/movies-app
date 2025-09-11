import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import { searchMovie } from './api/searchMovie';

// const API_KEY = '395e2453';
// const API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';
// const baseURL = 'https://api.themoviedb.org/3/';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query, type, year) => {
    try {
      const results = await searchMovie(query, type, year);
      setMovies(results);
    } catch (err) {
      alert(err.message);
      setMovies([]);
    }
  };

  return (
    <Container className="mt-4">
      <SearchForm onSearch={handleSearch} />
      <SearchResult movies={movies} />
    </Container>
  );
}

export default App;