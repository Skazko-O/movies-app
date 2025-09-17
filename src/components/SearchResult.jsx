import { Card, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import CustomPagination from './CustomPagination';
import './../assets/css/search.css';


function SearchResult({ movies, onPageChange }) {
  const { results, total, totalPages, currentPage } = movies;

  return (
    <Card>
      <Card.Header>
        <h4>Search result: {total} | Page {currentPage} of {totalPages}</h4>
      </Card.Header>
      <Card.Body>
        <Row>
          {Array.isArray(results) && results.map(movie => (
            <Col key={movie.id} md={3} className="mb-3">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Card.Body>
      {totalPages > 1 && (
        <div className='pagination-wrapper'>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </Card>
  );
}

export default SearchResult;
