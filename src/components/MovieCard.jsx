import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VerticallyCenteredModal from './VerticallyCenteredModal';
import { fetchDetails } from '../api/fetchDetails';
import { formateDate } from '../helpers/formatDate';
import { toast } from 'react-toastify';

function MovieCard({ movie }) {
  const [details, setDetails] = React.useState({ title: '', overview: '', date: '' });
  const [modalShow, setModalShow] = React.useState(false);
  const rawDate = movie.release_date || movie.first_air_date || '';

  async function handleClick() {
    const result = await fetchDetails(movie.id, movie.media_type);
    setDetails(result);
    setModalShow(true);
  }
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    const alreadyFav = storedFavs.some(item => item.id === movie.id);
    setIsFavorite(alreadyFav);
  }, [movie.id]);


  const favHandler = () => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavs = storedFavs.filter(item => item.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavs));
      toast.info('Removed from favorites');
      setIsFavorite(false);
    } else {
      const favMovie = {
        id: movie.id,
        title: movie.title || movie.name,
        date: formateDate(rawDate),
        image: movie.image,
        type: movie.media_type
      };
      const updatedFavs = [...storedFavs, favMovie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavs));
      toast.success('Added to favorites');
      setIsFavorite(true);
    }
  };

  return (
    <Card>
      <Card.Img variant="top" src={movie.image} alt={movie.title || movie.name} />
      <Card.Body>
        <Card.Title>{movie.title || movie.name}</Card.Title>
        <Card.Text>
          <b>Date:</b> {formateDate(rawDate)}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Quick</Button>{' '}
        <Button
          variant="info"
          onClick={() =>
            window.open(`/movies-app/#detail/${movie.media_type}/${movie.id}`, '_blank', 'noopener,noreferrer')
          }
        >
          Detail
        </Button>
        <Button variant="warning" className="fav-btn" onClick={favHandler}>
          {isFavorite ? '★' : '☆'}</Button>
      </Card.Body>
      <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={details.title}
        overview={details.overview}
        date={details.date} />
    </Card>
  );
}

export default MovieCard;
