import { Card, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function SearchResult({ movies }) {
  return (
    <Card>
      <Card.Header><h4>Search result</h4></Card.Header>
      <Card.Body>
        <Row>
          {movies.map(movie => (
            <Col key={movie.id} md={4} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SearchResult;
