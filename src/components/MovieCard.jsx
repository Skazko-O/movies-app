import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VerticallyCenteredModal from './VerticallyCenteredModal';
import { fetchDetails } from '../api/fetchDetails';
import { formateDate } from '../helpers/formatDate';
import { Link } from 'react-router';

function MovieCard({ movie }) {
  const [details, setDetails] = React.useState({ title: '', overview: '', date: '' });
  const [modalShow, setModalShow] = React.useState(false);
  const rawDate = movie.release_date || movie.first_air_date || '';

  async function handleClick() {
    const result = await fetchDetails(movie.id, movie.media_type);
    setDetails(result);
    setModalShow(true);
  }

  return (
    <Card>
      <Card.Img variant="top" src={movie.image} alt={movie.title || movie.name} />
      <Card.Body>
         <Card.Title>{movie.title || movie.name}</Card.Title>
        <Card.Text>
          <b>Date:</b> {formateDate(rawDate)}
          </Card.Text>
        <Button variant="primary" onClick={handleClick}>Quick</Button>{' '}
        <Link to={`/detail/${movie.media_type}/${movie.id}`} className={'btn btn-info'}>Detail</Link>{' '}
         <Button variant="warning" className="fav-btn">★</Button>
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
