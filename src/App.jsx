import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import { searchMovie } from './api/searchMovie';

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