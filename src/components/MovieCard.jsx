import { Card, Button } from 'react-bootstrap';

function MovieCard({ movie }) {
  const title = movie.title || movie.name || 'No title';
  const year = (movie.release_date || movie.first_air_date || '').slice(0, 4);

  return (
    <Card>
      <Card.Img variant="top" src={movie.image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text><b>Year:</b> {year}</Card.Text>
        <Button variant="primary" data-tmdb-id={movie.id} data-tmdb-type={movie.media_type}>Detailed</Button>{' '}
        <Button variant="warning" className="fav-btn" data-id={movie.id} data-title={title} data-poster={movie.poster_path} data-type={movie.media_type}>★</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
