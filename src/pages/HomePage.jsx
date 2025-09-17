import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import LoaderOverlay from '../components/LoaderOverlay';
import { useMovieSearch } from '../hooks/useMovieSearch';

export default function HomePage() {
  const {
    movies,
    searchParams,
    inProgress,
    searchHandle
  } = useMovieSearch();

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
