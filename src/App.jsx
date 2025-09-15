import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import LoaderOverlay from './components/LoaderOverlay';
import { searchMovie } from './api/searchMovie';
import { delay } from './helpers/delay';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  const [movies, setMovies] = useState([]); 
  const [inProgress, setInProgress] = useState(false)

  const searchHandler = async (query, type, year) => {
    setInProgress(true);
    try {
      const results = await searchMovie(query, type, year);
      setMovies(results);
    } catch (err) {
      toast.error('Some error ocurred, please try againe later.');
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
        <SearchForm onSearch={searchHandler} />
        <SearchResult movies={movies} />
      </Container>
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;