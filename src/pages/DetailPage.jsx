import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderOverlay from '../components/LoaderOverlay';

const API_KEY = `${import.meta.env.VITE_API_KEY_TMDB}`;
const BASE_URL = 'https://api.themoviedb.org/3';

const DetailPage = () => {
  const { media_type, id } = useParams();
  const [details, setDetails] = useState(null);
  

  useEffect(() => {
    fetch(`${BASE_URL}/${media_type}/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(err => {
        console.error('Помилка:', err);
        setDetails(null); 
      });
  }, [media_type, id]);    

  
  if (!details) return <LoaderOverlay /> ;

  return (
    <div className="container mt-4">
      <h2>{details.title || details.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.poster_path || details.backdrop_path}`}
        alt={details.title || details.name}
        className="img-fluid mb-3"
      />
      <p><strong>Опис:</strong> {details.overview}</p>
      <p><strong>Рейтинг:</strong> {details.vote_average}</p>
      <p><strong>Дата релізу:</strong> {details.release_date || details.first_air_date}</p>
      <p><strong>Жанри:</strong> {details.genres?.map(g => g.name).join(', ')}</p>
      <p><strong>Кінокомпанія:</strong> {details.production_companies?.map(p => p.name).join(', ')}</p>
    </div>
  );
};

export default DetailPage;
