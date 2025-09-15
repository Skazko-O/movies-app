import { Card, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function SearchResult({ movies }) { 
   const { results, total, totalPages, currentPage } = movies;
  return (
    <Card>
      <Card.Header><h4>Search result: {total} | Page {currentPage} of {totalPages}</h4></Card.Header>
      <Card.Body>
        <Row>
          {Array.isArray(results) && results.map(movie => (
            <Col key={movie.id} md={2} className="mb-2">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SearchResult;
