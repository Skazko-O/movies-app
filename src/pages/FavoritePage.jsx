import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

export default function FavoritePage() {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavs);
  }, []);

  return (
    <Card>
      <Card.Body>
        <h3 className="mb-4">Favorites</h3>
        {favorites.length > 0 ? (
          <Row>
            {favorites.map(movie => (
              <Col key={movie.id} md={3} className="mb-3">
                <MovieCard movie={{ ...movie, media_type: movie.media_type || movie.type }} />
              </Col>
            ))}
          </Row>
        ) : (
          <p>You have no favorites yet.</p>
        )}
      </Card.Body>
    </Card>
  );
}
