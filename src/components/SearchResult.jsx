import { Card, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { useState } from 'react';

function SearchResult({ movies }) {
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  return (
    <Card>
      <Card.Header><h4>Search result</h4></Card.Header>
      <Card.Body>
        <Row>
          {movies.map(movie => (
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
