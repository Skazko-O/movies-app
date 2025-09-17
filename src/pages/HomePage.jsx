import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { useState } from 'react';
import LoaderOverlay from '../components/LoaderOverlay';
import { searchMovie } from '../api/searchMovie';
import { delay } from '../helpers/delay';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [movies, setMovies] = useState({
    results: [],
    total: 0,
    totalPages: 0,
    currentPage: 1
  });

  const [searchParams, setSearchParams] = useState({
    query: '',
    type: '',
    year: ''
  });

  const [inProgress, setInProgress] = useState(false);

  const searchHandle = async ({ query, type, year }, page = 1) => {
    setSearchParams({ query, type, year });
    setInProgress(true);

    try {
      const results = await searchMovie(query, type, year, 'en-US', page);
      setMovies(results);
      console.log('Fetched page:', results.currentPage);
    } catch (err) {
      toast.error('Some error occurred, please try again later.');
      setMovies([]);
    } finally {
      await delay(1000);
      setInProgress(false);
    }
  };

  return (
    <>
      {inProgress && <LoaderOverlay />}
      <Container className="mt-4">
        <SearchForm onSearch={(query, type, year) => searchHandle({ query, type, year })} />
        <SearchResult
          movies={movies}
          onPageChange={(newPage) => searchHandle(searchParams, newPage)}
        />
      </Container>
    </>
  );
}
